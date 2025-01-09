import { Task } from "@/components/tasks/TaskBoard";

declare global {
  interface Window {
    addTask: (task: Omit<Task, 'id'>) => void;
  }
}

export {};
