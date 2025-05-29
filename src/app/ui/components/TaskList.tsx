"use client";

import { Task } from "@/core/domain/entities/Task";
import { useEffect, useState } from "react";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  );
};
