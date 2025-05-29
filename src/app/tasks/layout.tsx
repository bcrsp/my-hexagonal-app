import React from "react";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
   

    <div className="tasks-layout">
      <header className="tasks-header">
        <h1>📋 Mis Tareas</h1>
        <nav>
          <a href="/tasks">Ver tareas</a>
          <a href="/tasks/create">Nueva tarea</a>
        </nav>
      </header>
      <main className="tasks-content">
        {children}
      </main>
    </div>
  );
}
