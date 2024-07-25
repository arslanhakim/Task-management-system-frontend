import { useEffect, useState } from "react";
import io from "socket.io-client";

const WS_PORT = 3001; // The port where your WebSocket server is running

const socket = io(`http://localhost:${WS_PORT}`);
const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for new notifications
    socket.on("newNotification", (data) => {
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    });
    return () => {
      // Clean up the event listener when component unmounts
      socket.off("newNotification");
    };
  }, []);

  return (
    <div className="absolute top-8 right-0 bg-white min-w-40 shadow z-50  border rounded-md p-4 flex flex-col items-center gap-4">
      <h2 className="font-semibold">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="self-start flex flex-col items-start justify-start">
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      ) : (
        <span className="text-grey-700 text-xs">No Notifications</span>
      )}
    </div>
  );
};

export default NotificationComponent;
