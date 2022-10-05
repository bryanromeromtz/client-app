import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTasks } from "../context/TasksContext.jsx";
import { useParams, useNavigate } from "react-router-dom";

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [validId, setValidId] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        if (task) {
          setTask({
            title: task.title,
            description: task.description,
          });
          setValidId(true);
        } else {
          setValidId(false);
        }
      } else {
        console.log("no hay id");
      }
    };
    loadTask();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-5xl font-bold text-center text-red-500 mb-4 mt-4">
        {params.id ? "Edit Task" : "Create Task"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.title || values.title.length < 3) {
            errors.title = "Please enter a title";
          } else if (!values.description) {
            errors.description = "Please enter a description";
          }
          return errors;
        }}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("editando");
            await updateTask(params.id, values);
          } else {
            console.log("creando");
            await createTask(values);
          }
          setTask({
            title: "",
            description: "",
          });
          navigate("/tasks");
        }}
      >
        {({ handleChange, values, isSubmitting }) => (
          <Form className="w-full max-w-lg bg-purple-400 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold text-purple-700 uppercase">
              {params.id ? "Edit Task" : "Create Task"}
            </h2>
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Write a title for your task"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={values.title}
            />
            <ErrorMessage name="title" component="div" />
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
              Description:
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Enter a description for the task"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={values.description}
            />
            <ErrorMessage name="description" component="div" />
            {params.id ? (
              <button
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Update"}
              </button>
            ) : (
              <button
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Save"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
