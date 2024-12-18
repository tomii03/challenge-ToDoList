import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTask } from "@/api";

export const useAddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [nextId, setNextId] = useState<number>(1); 

  useEffect(() => {
    const savedId = localStorage.getItem('nextId');
    if (savedId) {
      setNextId(Number(savedId)); 
    }
  }, []);

  const handleSubmitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTask({
      id: nextId.toString(),
      text: newTaskValue,
      description: newTaskDescription,
      completed: false,
    });

    router.refresh();
    setNewTaskValue("");
    setNewTaskDescription("");

    const newId = nextId + 1;
    setNextId(newId);
    localStorage.setItem('nextId', newId.toString());
  };

  return {
    modalOpen,
    setModalOpen,
    newTaskValue,
    setNewTaskValue,
    newTaskDescription,
    setNewTaskDescription,
    handleSubmitNewTask,
  };
};
