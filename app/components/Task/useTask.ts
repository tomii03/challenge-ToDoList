import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTask, deleteTask } from "@/api";
import { TaskInterface } from "@/types/tasks";

export const useTask = (task: TaskInterface) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [modalDeleteOpen, setOpenModalDelete] = useState(false);
  const [taskEdit, setTaskEdit] = useState(task.text);
  const [descripEdit, setDescripEdit] = useState(task.description);

  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTask({
      id: task.id,
      text: taskEdit,
      description: descripEdit,
      completed: task.completed,
    });
    router.refresh();
  };

  const handleCompletedTask = async () => {
    await editTask({
      id: task.id,
      text: taskEdit,
      description: descripEdit,
      completed: !task.completed,
    });
    router.refresh();
  };

  const handleSubmitDeleteTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await deleteTask(task.id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return {
    openModalEdit,
    setOpenModalEdit,
    modalDeleteOpen,
    setOpenModalDelete,
    taskEdit,
    setTaskEdit,
    descripEdit,
    setDescripEdit,
    handleSubmitEditTask,
    handleCompletedTask,
    handleSubmitDeleteTask,
  };
};
