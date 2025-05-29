import { Task } from "@/core/domain/entities/Task";
import { ITaskRepository } from "@/core/domain/repositories/ITaskRepository";

const tasks: Task[] = [];

export class TaskInMemoryAdapter implements ITaskRepository {
  async save(task: Task): Promise<void> {
    tasks.push(task);
  }

  async findAll(): Promise<Task[]> {
    return tasks;
  }
}
