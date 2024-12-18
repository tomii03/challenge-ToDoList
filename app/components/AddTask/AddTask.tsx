// components/AddTask.tsx

"use client";

import React from "react";
import { VscAdd } from "react-icons/vsc";
import ModalTask from "../Modal/ModalTask";
import { useAddTask } from "./useAddTask";

const AddTask = () => {
  const {
    modalOpen,
    setModalOpen,
    newTaskValue,
    setNewTaskValue,
    newTaskDescription,
    setNewTaskDescription,
    handleSubmitNewTask,
  } = useAddTask();

  return (
    <>
      <button
        className="btn btn-primary w-9/12 mr-5"
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
