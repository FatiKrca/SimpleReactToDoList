import { useState } from "react";

import {  useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({  taskEdit, taskFormUpdate,onUpdate }) {

  const {    createTask  } = useContext(TasksContext)


  const [title, setTitle] = useState(taskEdit ? taskEdit.title:'');
  const [task, setTask] = useState(taskEdit ? taskEdit.task:'');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeTask = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if(taskFormUpdate){
       onUpdate(taskEdit.id,title,task);
      // editTaskById(taskEdit.id,title,task);
    }
    else{
      // onCreate(title, task);
      createTask(task, title);

    }
    setTask("");
    setTitle("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="tascUpdate">
          <h3>Lütfen Task Düzenleyiniz</h3>
          <form className="task-form">
            <label className="tastLabel">Başlık Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChangeTitle}
              className="tasktInput"
            />
            <label className="tastLabel">Task Düzenleyiniz</label>
            <textarea
              value={task}
              onChange={handleChangeTask}
              className="tasktInput"
              rows={5}
            />
            <button className="taskButton buttonUpdate" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="tascCreate">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="tastLabel">Başlık</label>
            <input
              value={title}
              onChange={handleChangeTitle}
              className="tasktInput"
            />
            <label className="tastLabel">Task Giriniz</label>
            <textarea
              value={task}
              onChange={handleChangeTask}
              className="tasktInput"
              rows={5}
            />
            <button className="taskButton" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
