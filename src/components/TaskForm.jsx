import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskForm() {
  //Estados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Es como si fuera value.createTask
  const { createTask } = useContext(TaskContext);

  //Crea una tarea con el boton y limpia los inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          // Asigna el valor al titulo
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          // Tenga el mismo valor del titulo en ese momento
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          name=""
          id=""
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
