"use client";
import { TaskInterface } from "@/types/tasks";
import ModalTask from "./ModalTask";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTask, editTask } from "@/api";
import { VscChromeClose } from "react-icons/vsc";

interface TaskProps {
  task: TaskInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
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
    });
    router.refresh();
  };
  
  const handleSubmitDeleteTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await deleteTask(task.id);
    setOpenModalDelete(false)
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>{task.description}</td>
      <th>
        <button
          className="btn btn-success btn-xs"
          onClick={() => setOpenModalEdit(true)}
        >
          Edit
        </button>
        <ModalTask
          modalOpen={openModalEdit}
          setModalOpen={setOpenModalEdit}
          handleSubmitNewTask={handleSubmitEditTask}
          valueTask={taskEdit}
          setNewTaskValue={setTaskEdit}
          descriptionTask={descripEdit}
          setNewTaskDescription={setDescripEdit}
        />
      </th>
      <th>
        <button className="btn btn-warning btn-xs" onClick={() => setOpenModalDelete(true)}>Delete</button>
        <dialog
          id="my_modal_5"
          className={`modal ${modalDeleteOpen ? "modal-open" : ""}`}
        >
          <div className="modal-box">
            <label
              className="btn btn-sm btn-circle absolute right-3 top-3"
              onClick={() => setOpenModalDelete(false)}
            >
              <VscChromeClose />
            </label>
            <form method="dialog" onSubmit={handleSubmitDeleteTask}>
              <h3>Desea borrar la tarea??</h3>
              <div className="modal-action">
                <button
                  className="btn mt-4"
                  type="submit"
                  onClick={() => setOpenModalDelete(false)}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </th>
    </tr>
  );
};

export default Task;
