import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTasks } from "../context/TasksContext.jsx";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  // format date
  const date = new Date(task.created_at);
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-700 uppercase">
          {task.title}
        </h2>
        <span className="font-bold">{task.done === 1 ? "👍" : "❌"}</span>
      </header>
      <p className="text-gray-900">
        <span className="font-bold">Description:</span> {task.description}
      </p>
      <span className="text-red-500">{date.toLocaleString()}</span>
      {/* buttons */}
      <div className="flex mt-4 py-4 border-t border-gray-300">
        <button
          className={`${task.done === 1 ? "bg-green-500" : "bg-pink-500"}
          ${task.done === 1 ? "hover:bg-green-700" : "hover:bg-pink-700"}
             text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={() => {
            handleDone();
          }}
        >
          {task.done === 1 ? "Undone" : "Done"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => navigate(`/tasks/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
