import { TaskInterface } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ListProps {
  tasks: TaskInterface[];
}

const TodoList: React.FC<ListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
