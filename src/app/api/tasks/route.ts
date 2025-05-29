import { AddTask } from "@/core/usecases/task/AddTask";
import { TaskInMemoryAdapter } from "@/infraestructure/adapters/TaskInMemoryAdapter";
import { NextRequest, NextResponse } from "next/server";

const adapter = new TaskInMemoryAdapter();

export async function POST(req: NextRequest) {
  const { title } = await req.json();
  const useCase = new AddTask(adapter);
  const task = await useCase.addTask(title);
  return NextResponse.json(task)
}
export async function GET() {
  const tasks = await adapter.findAll();
  return NextResponse.json(tasks);
}
