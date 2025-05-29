import { Task } from '@/core/domain/entities/Task';
export interface ITaskRepository {
    save(task: Task): Promise<void>;
    findAll(): Promise<Task[]>;
}