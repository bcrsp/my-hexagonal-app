"use client";
import { useState } from "react";
import "./taskForm.css";
export default function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    alert;
  };

  const handleChangetitle = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form">
      <label
        htmlFor="title"
        className="task-form__label">
        Título
      </label>
      <input
        id="title"
        className="task-form__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ej: Comprar leche"
        required
      />
      <button
        type="submit"
        className="task-form__button">
        Agregar tarea
      </button>
    </form>
  );
}
