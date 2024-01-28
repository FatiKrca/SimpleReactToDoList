import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TastList from "./components/TaskList";

import { useEffect, useContext } from "react";
import TasksContext from "./context/task";
function App() {

  const {fetchTasks} = useContext(TasksContext)

  useEffect(()=>{
    fetchTasks();

  });

 

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Görevlerim</h1>
      <TastList/>
    </div>
  );
}

export default App;
