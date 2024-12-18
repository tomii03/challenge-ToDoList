import { TaskInterface } from "@/types/tasks";
import React from "react";
import { useFilter } from "../../Context/FilterContext";

export const useTodoList = (tasks: TaskInterface[]) => {
  const { selectedFilter } = useFilter();

  const filteredTasks = React.useMemo(() => {
    if (selectedFilter === "complete") {
      return tasks.filter((task) => task.completed);
    }
    if (selectedFilter === "incomplete") {
      return tasks.filter((task) => !task.completed);
    }
    if (selectedFilter === "all") {
      return tasks;
    }
    return tasks;
  }, [tasks, selectedFilter]);

  return { filteredTasks };
};
