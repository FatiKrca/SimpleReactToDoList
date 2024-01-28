import { createContext } from "react";
import { useState } from "react";
import axios from "axios";




const TasksContext = createContext();
function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (task, title) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      task,
    });
    console.log(response.data);
    const createTasks = [...tasks, response.data];
    setTasks(createTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);

    const afterDeletetask = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(afterDeletetask);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      task: updatedTaskDesc,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, task: updatedTaskDesc };
      } else {
        return tasks;
      }
    });
    setTasks(updatedTasks);
  };
  const SharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };
  return (
    <TasksContext.Provider value={SharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );

}

export { Provider };
export default TasksContext;
