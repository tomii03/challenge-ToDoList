import { render } from "@testing-library/react";
import ModalTask from "@/app/components/Modal/ModalTask";

// Mock de las funciones pasadas como props
const mockSetModalOpen = jest.fn();
const mockHandleSubmitNewTask = jest.fn();
const mockSetNewTaskValue = jest.fn();
const mockSetNewTaskDescription = jest.fn();

describe("ModalTask", () => {
  it("should render the modal when modalOpen is true", () => {
    render(
      <ModalTask
        modalOpen={true}
        setModalOpen={mockSetModalOpen}
        handleSubmitNewTask={mockHandleSubmitNewTask}
        valueTask=""
        setNewTaskValue={mockSetNewTaskValue}
        descriptionTask=""
        setNewTaskDescription={mockSetNewTaskDescription}
      />
    );

  });


});
