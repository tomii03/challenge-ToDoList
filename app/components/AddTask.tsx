"use client";

import React, { FormEventHandler, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import ModalTask from "./ModalTask";
import { addTask } from "@/api";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [nextId, setNextId] = useState(1)

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue);

    await addTask({
      id: nextId.toString(),
      text: newTaskValue,
      description: newTaskDescription,
      
    });
    router.refresh();
    setNewTaskValue("");
    setNewTaskDescription("");
    setNextId((prevId) => prevId + 1);
  };

  return (
    <>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add Task <VscAdd />
      </button>
      <ModalTask
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleSubmitNewTask={handleSubmitNewTask}
        valueTask={newTaskValue}
        setNewTaskValue={setNewTaskValue}
        descriptionTask={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
      />
    </>
  );
};

export default AddTask;
