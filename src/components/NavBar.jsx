import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-slate-700 flex justify-between items-center p-4">
      <Link to="/tasks">
        <p className="text-white">To Do List</p>
      </Link>
      <ul className="flex">
        <li className="mr-4">
          <Link to="/tasks" className="text-white">
            Tasks
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/tasks/new" className="text-white">
            New Task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
