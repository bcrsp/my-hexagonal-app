import { Task } from "@/core/domain/entities/Task";
import { ITaskRepository } from "@/core/domain/repositories/ITaskRepository";
import { randomUUID } from "crypto";

export class AddTask {
  constructor(private taskRepository: ITaskRepository) {}

  async addTask(title: string): Promise<Task> {
    const task = new Task(randomUUID(), title)
    await this.taskRepository.save(task);
    return task
  }
}
