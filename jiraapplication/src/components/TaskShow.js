import { useState } from "react";
import TaskCreate from "./TaskCreate";

import {  useContext } from "react";
import TasksContext from "../context/task";


function TaskShow({ task }) {

  const {  deleteTaskById,editTaskById} = useContext(TasksContext)

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id)
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    // setShowEdit(true);
  };

  const handleSubmit = (id, updatedTitle, updatedTask) => {
    setShowEdit(false);
    // onUpdate(id, updatedTitle,updatedTask);
    editTaskById(id, updatedTitle,updatedTask)
    // setShowEdit(true);
  };


  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate taskEdit={task}  taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="tast-title">Göreviniz:</h3>
          <p>{task.title}</p>
          <h3 className="tast-title">Yapılacaklar</h3>
          <p>{task.task}</p>

          <div>
            <button className="btn-sil" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="btn-guncelle" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
