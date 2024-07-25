import React from "react";

const ShiftTypeDefinitions: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shift Type Definitions</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="col-span-1 mt-5">
          <input
            type="text"
            placeholder="Name *"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="name"
          />
          {/* Shift Details */}
          <div className="grid grid-cols-4 col-span-1 gap-4 mt-10">
            <div className="col-span-1 mt-5">
              <label className="block text-sm font-medium text-gray-700">
                Start of Shift *
              </label>
            </div>
            <div className="col-span-1 mt-5">
              <input
                type="time"
                placeholder="*"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="startOfShift"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-bold text-gray-700">
                Lower Tolerance
              </label>
              <input
                type="time"
                placeholder="*"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="startTolerance1"
                step="1"
              />
            </div>
            <div className="col-span-1 ">
              <label className="block text-sm font-bold text-gray-700">
                Upper Tolerance
              </label>
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="startTolerance2"
                step="1"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Break Start *
              </label>
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakStart"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakStartTolerance1"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakStartTolerance2"
                step="1"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Break End *
              </label>
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakEnd"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakEndTolerance1"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="breakEndTolerance2"
                step="1"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                End of Shift *
              </label>
            </div>
            <div className="col-span-1">
              <input
                type="time"
                placeholder="*"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="endOfShift"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                placeholder="*"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="endTolerance1"
                step="1"
              />
            </div>
            <div className="col-span-1">
              <input
                type="time"
                placeholder="*"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="endTolerance2"
                step="1"
              />
            </div>
          </div>
        </div>

        {/* Right Side Elements */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Break Pdks Transition *
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="breakPdksTransition"
          >
            {/* Add your options here */}
          </select>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            First Holiday Day *
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="firstHolidayDay"
          >
            {/* Add your options here */}
          </select>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Second Holiday Day *
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="secondHolidayDay"
          >
            {/* Add your options here */}
          </select>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Shift Start Type *
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="shiftStartType"
          >
            {/* Add your options here */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ShiftTypeDefinitions;
