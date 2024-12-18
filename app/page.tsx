import { getAllTask } from "@/api";
import AddTask from "./components/AddTask/AddTask";
import TodoList from "./components/List/TodoList";
import FilterSelector from "./components/FilterSelector/FilterSelector";
import Link from "next/link";

export default async function Home() {
  const tasks = await getAllTask();

  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="text-center my-5 flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">ToDo List</h1>
          <Link href="/aboutPage" className="w-2/12">
            <button className="btn btn-outline btn-primary w-10/12">
              Acerca de
            </button>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center mt-6">
          <AddTask />
          <FilterSelector />
        </div>
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
