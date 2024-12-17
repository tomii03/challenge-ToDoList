import { getAllTask } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {

  const tasks = await getAllTask();
  console.log(tasks)
  return (
      <main className="max-w-4xl mx-auto mt-4 ">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">ToDo List</h1>
          <AddTask/>
        </div>
        <TodoList tasks={tasks}/>
      </main>
      
  );
}