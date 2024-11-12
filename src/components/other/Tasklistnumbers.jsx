import React from "react";

function Tasklistnumbers() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4"> {/* Reduced margin-top */}
      <div className="rounded-lg py-8 px-8 bg-blue-500">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className="rounded-lg py-8 px-8 bg-green-500">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className="rounded-lg py-8 px-8 bg-red-500">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className="rounded-lg py-8 px-8 bg-yellow-500">
        <h2 className="text-4xl font-bold">0</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
    </div>
  );
}

export default Tasklistnumbers;