import React from "react";

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10"
    >
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-red-600 rounded px-3 py-1 text-white">High</h3>
          <h4 className="text-gray-700">20 Feb 2024</h4>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Task 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-yellow-400 rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-red-600 rounded px-3 py-1 text-white">High</h3>
          <h4 className="text-gray-700">20 Feb 2024</h4>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Task 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-blue-400 rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-red-600 rounded px-3 py-1 text-white">High</h3>
          <h4 className="text-gray-700">20 Feb 2024</h4>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Task 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-green-400 rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-red-600 rounded px-3 py-1 text-white">High</h3>
          <h4 className="text-gray-700">20 Feb 2024</h4>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Task 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-red-600 rounded px-3 py-1 text-white">High</h3>
          <h4 className="text-gray-700">20 Feb 2024</h4>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Task 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Tasklist;
