import { Routes, Route } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TaskForm";
import NotFound from "./pages/404NotFound";

import NavBar from "./components/NavBar";

import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <div className="bg-emerald-600 min-h-screen">
      <NavBar />
      <div className="container mx-auto py-4">
        <TaskProvider>
          <Routes>
            <Route path="/" exact element={<TasksPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<TasksForm />} />
            <Route path="/tasks/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
