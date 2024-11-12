// import React from 'react'

const createtask = () => {
  return (
    <div className="max-w-lg mx-auto bg-black rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-100">Task Title</h3>
          <input
            type="text"
            placeholder="Make UI design"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-100"
          />

          <h3 className="text-xl font-semibold text-gray-100">Description</h3>
          <textarea
            cols={30}
            rows={5}
            placeholder="Add details about the task"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-100"
          ></textarea>

          <h3 className="text-xl font-semibold text-gray-100">Date</h3>
          <input
            type="date"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-100"
          />

          <h3 className="text-xl font-semibold text-gray-100">Assign to</h3>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-100"
          />

          <h3 className="text-xl font-semibold text-gray-100">Category</h3>
          <input
            type="text"
            placeholder="design, dev, etc."
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-100"
          />

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-black rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Create Task
          </button>
        </form>
      </div>
  )
}

export default createtask