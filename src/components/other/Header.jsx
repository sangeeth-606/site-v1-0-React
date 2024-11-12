import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-bold">ZAPE 👋</span>
      </h1>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300">
        Log Out
      </button>
    </div>
  );
};

export default Header;
