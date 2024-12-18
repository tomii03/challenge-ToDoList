"use client";

import { TaskInterface } from "@/types/tasks";
import { VscChromeClose } from "react-icons/vsc";
import ModalTask from "../Modal/ModalTask";
import { useTask } from "./useTask";

interface TaskProps {
  task: TaskInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const {
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
  } = useTask(task);

  return (
    <tr key={task.id}>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={task.completed}
            onChange={handleCompletedTask}
          />
        </label>
      </th>
      <td>{task.text}</td>
      <td>{task.description}</td>

      {/* Edit Button */}
      <th>
        <button
          className="btn btn-success btn-xs"
          onClick={() => setOpenModalEdit(true)}
          disabled={task.completed}
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

      {/* Delete Button */}
      <th>
        <button
          className="btn btn-warning btn-xs"
          onClick={() => setOpenModalDelete(true)}
          disabled={task.completed}
        >
          Delete
        </button>

        <dialog
          id="my_modal"
          className={`modal ${modalDeleteOpen ? "modal-open" : ""}`}
        >
          <div className="modal-box">
            <label
              className="btn btn-circle absolute right-3 top-3"
              onClick={() => setOpenModalDelete(false)}
            >
              <VscChromeClose />
            </label>

            <form method="dialog" onSubmit={handleSubmitDeleteTask}>
              <h3>Are you sure you want to delete this task?</h3>

              <button className="btn mt-4" type="submit">
                Confirm
              </button>
            </form>
          </div>
        </dialog>
      </th>
    </tr>
  );
};

export default Task;
