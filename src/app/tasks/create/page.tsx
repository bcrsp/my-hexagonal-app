import TaskForm from "@/app/ui/components/TaskForm";
import "./page.css";

export default function page() {
  return (
     <section className="create-task">
      <h2 className="create-task__title">Nueva tarea</h2>
      <TaskForm />
    </section>
  );
}
