import { TaskInterface } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTask = async (): Promise<TaskInterface> => {
    const res = await fetch (`${baseUrl}/task`);
    const list = await res.json();
    return list;
}