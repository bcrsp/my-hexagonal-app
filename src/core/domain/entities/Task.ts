export class Task {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly completed: boolean = false,
  ) {
    if(!title) throw new Error("Title is required");
  }
}
