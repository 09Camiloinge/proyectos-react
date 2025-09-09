"use client";
import { useState } from "react";

export default function ListaTareas() {
  const [tareas, setTareas] = useState([
    "Estudiar React",
    "Hacer ejercicio",
    "Leer un libro"
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>

      {tareas.length === 0 ? (
        <p>No tiene tareas pendientes</p>
      ) : (
        <ul>
          {tareas.map((tarea, i) => (
            <li key={i}>{tarea}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
