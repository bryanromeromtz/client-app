import React from "react";
import { useEffect } from "react";

import TaskCard from "../components/TaskCard.jsx";
import { useTasks } from "../context/TasksContext.jsx";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);
  function renderTasks() {
    if (tasks.length > 0) {
      return tasks.map((task) => <TaskCard key={task.id} task={task} />);
    } else {
      return <h2>{tasks.message}</h2>;
    }
  }
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-red-500">Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {renderTasks()}
      </div>
    </div>
  );
}

export default TasksPage;
