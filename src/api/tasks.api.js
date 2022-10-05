import axios from "axios";

const createTaskRequest = async (task) => {
  const response = await axios.post(
    "https://react-vite-tailwind-project-production.up.railway.app/api/tasks",
    task
  );
  return response.data;
};

const getTasksRequest = async () => {
  const response = await axios.get(
    "https://react-vite-tailwind-project-production.up.railway.app/api/tasks"
  );
  return response.data;
};

const getTaskByIdRequest = async (id) => {
  const response = await axios.get(
    `https://react-vite-tailwind-project-production.up.railway.app/api/tasks/${id}`
  );
  return response.data;
};

const updateTaskRequest = async (id, task) => {
  const response = await axios.put(
    `https://react-vite-tailwind-project-production.up.railway.app/api/tasks/${id}`,
    task
  );
  return response.data;
};

const deleteTaskRequest = async (id) => {
  const response = await axios.delete(
    `https://react-vite-tailwind-project-production.up.railway.app/api/tasks/${id}`
  );
  return response.data;
};

const toggleTaskDoneRequest = async (id, done) => {
  const response = await axios.put(
    `https://react-vite-tailwind-project-production.up.railway.app/api/tasks/${id}`,
    {
      done,
    }
  );
  return response.data;
};

export {
  createTaskRequest,
  getTasksRequest,
  getTaskByIdRequest,
  updateTaskRequest,
  deleteTaskRequest,
  toggleTaskDoneRequest,
};
