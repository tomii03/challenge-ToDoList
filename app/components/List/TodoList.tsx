"use client";

import React from "react";
import { TaskInterface } from "@/types/tasks";
import Task from "../Task/Task";
import { useTodoList } from "./useTodoList";

interface ListProps {
  tasks: TaskInterface[];
}

const TodoList: React.FC<ListProps> = ({ tasks }) => {
  const { filteredTasks } = useTodoList(tasks);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
