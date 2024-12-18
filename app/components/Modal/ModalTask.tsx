import React, { FormEvent } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  handleSubmitNewTask: (e: FormEvent<HTMLFormElement>) => void;
  valueTask: string;
  setNewTaskValue: (value: string) => void;
  descriptionTask: string;
  setNewTaskDescription: (value: string) => void;
}

const ModalTask: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  handleSubmitNewTask,
  valueTask,
  setNewTaskValue,
  descriptionTask,
  setNewTaskDescription,
}) => {
  return (
    <dialog
      id="my_modal_5"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <label
          className="btn btn-sm btn-circle absolute right-3 top-3"
          onClick={() => setModalOpen(false)}
        >
          <VscChromeClose />
        </label>
        <form method="dialog" onSubmit={handleSubmitNewTask}>
          <h3>Add New Task</h3>
          <div className="modal-action">
            <input
              value={valueTask}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type Here"
              className="input input-bordered w-full max-w-xs mt-4"
            />
            <input
              value={descriptionTask}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs mt-4"
            />
            <button
              className="btn mt-4"
              type="submit"
              name="confirm"
              onClick={() => setModalOpen(false)}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ModalTask;
