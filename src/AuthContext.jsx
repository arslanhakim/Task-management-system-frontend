import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

const AuthContext = createContext();
const userData = JSON.parse(localStorage.getItem("user"));

// API and WebSocket configuration
const API_PORT = 3000; // The port where your Express server is running
const WS_PORT = 3001; // The port where your WebSocket server is running

const apiBaseUrl = `http://localhost:${API_PORT}/api`;
const socket = io(`http://localhost:${WS_PORT}`);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    console.log(socket);
  }, []);

  const login = async (username, password) => {
    try {
      // Simulate API call to authenticate user and fetch group information
      const response = await fetch(`${apiBaseUrl}/users`);
      const users = await response.json();
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (authenticatedUser) {
        fetchTasks(authenticatedUser.groupId);
        setUser(authenticatedUser);
        setGroup(authenticatedUser.groupId);
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        toast.success("Successfully Logged in");
      } else {
        toast.error("Invalid Login");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const fetchTasks = async (groupId) => {
    try {
      const response = await fetch(`${apiBaseUrl}/tasks?groupId=${groupId}`);
      const getTasks = await response.json();

      setTasks(getTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Error fetching tasks:", error);
      return [];
    }
  };
  useEffect(() => {
    if (userData) {
      setUser(userData);
      fetchTasks(userData.groupId);
    }

    // WebSocket connection
    socket.on("connect", () => {
      console.log("WebSocket connected");
    });

    socket.on("newNotification", (data) => {
      console.log("Received new notification:", data);
      // Handle the received notification here
    });
    socket.on("notification", (data) => {
      console.log("Received new notification:", data);
      // Handle the received notification here
    });

    socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });

    return () => {
      // Clean up the WebSocket connection when the component unmounts
      socket.disconnect();
    };
  }, [tasks]);

  const addTask = async (newTask) => {
    try {
      const response = await fetch(`${apiBaseUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const addedTask = await response.json();
      setTasks((prev) => [...prev, addedTask]);
      toast.success("New Task Added:");
      socket.emit("notification", {
        message: `New task "${newTask.title}" added.`,
      });
    } catch (error) {
      toast.error("Error adding tasks:", error);
      console.log(error);
      return null;
    }
  };
  const deleteTask = async (taskId) => {
    try {
      const isDeleted = await fetch(`${apiBaseUrl}/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (isDeleted) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        toast.success("Deleted Successfully");
      } else {
        toast.error("Not Found");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error deleting tasks:", error);
      return false;
    }
  };

  const completeTask = async (taskId) => {
    try {
      const updatedTasks = tasks.find((task) => task.id === taskId);
      const isCompleted = await fetch(`${apiBaseUrl}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !updatedTasks.completed }),
      });
      if (isCompleted) {
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );

        toast.success("updated Successfully");
      } else {
        toast.error("Not Found");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const reorderTasks = (startIndex, endIndex) => {
    const reorderedTasks = Array.from(tasks);

    const [movedTask] = reorderedTasks.splice(startIndex, 1);
    reorderedTasks.splice(endIndex, 0, movedTask);
    setTasks(reorderedTasks);
  };

  const logout = () => {
    setUser(null);
    setGroup(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        tasks,
        group,
        login,
        logout,
        completeTask,
        deleteTask,
        fetchTasks,
        addTask,
        reorderTasks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
