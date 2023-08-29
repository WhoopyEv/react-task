import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskList() {

  // Estado
  const {tareas, deleteTask} = useContext(TaskContext)

  if (tareas.length == 0) {
    
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {/*Recorre el diccionario y los pasa a TaskCard*/}
      {tareas.map((tarea) => (
        /*Acordarse que el key es para darle un id a los componentes a crear*/
        <TaskCard key={tarea.id} tarea={tarea}/>
      ))}
    </div>
  );
}

export default TaskList;
