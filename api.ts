import { TaskInterface } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTask = async (): Promise<TaskInterface> => {
  const res = await fetch(`${baseUrl}/task`, { cache: "no-store" });
  const list = await res.json();
  return list;
};

export const addTask = async (task: TaskInterface): Promise<TaskInterface> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await res.json();
  return newTask;
};

export const editTask = async (task: TaskInterface): Promise<TaskInterface> => {
  const res = await fetch(`${baseUrl}/task/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updateTask = await res.json();
  return updateTask;
};

export const deleteTask = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/task/${id}`, {
    method: "DELETE",
  });
};
