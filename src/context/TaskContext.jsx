import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tasks";

// Nombre del Contexto que almacena los datos
export const TaskContext = createContext();

export function TaskContextProvider(props) {

  // Estado Tareas
  const [tareas, setTareas] = useState([]);

  // Para que asigne el JSON al momento de su carga
  useEffect(() => {
    setTareas(data);
  }, []);

  //Crea una nueva tarea
  function createTask(tarea) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        title: tarea.title,
        description: tarea.description,
      },
    ]);
  }

  // Elimina una tarea por medio de una filtración
  function deleteTask(taskId) {
    setTareas(tareas.filter((tarea) => tarea.id !== taskId));
  }

  return (
    //Envia los estados o atributos a sus hijos
    <TaskContext.Provider
      value={{
        tareas,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
