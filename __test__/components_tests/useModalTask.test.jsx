import { render, screen, fireEvent } from "@testing-library/react";
import ModalTask from "../../app/components/Modal/ModalTask";
import "@testing-library/jest-dom";

describe("ModalTask Component", () => {
  const mockSetModalOpen = jest.fn();
  const mockHandleSubmitNewTask = jest.fn();
  const mockSetNewTaskValue = jest.fn();
  const mockSetNewTaskDescription = jest.fn();

  const defaultProps = {
    modalOpen: true,
    setModalOpen: mockSetModalOpen, // Usa los mocks correctos aquí
    handleSubmitNewTask: mockHandleSubmitNewTask,
    valueTask: "",
    setNewTaskValue: mockSetNewTaskValue,
    descriptionTask: "",
    setNewTaskDescription: mockSetNewTaskDescription,
  };

  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

  it("should close the modal when the close button is clicked", () => {
    render(<ModalTask {...defaultProps} />);
    const closeButton = screen.getByText("Confirm" );
    fireEvent.click(closeButton);
    expect(mockSetModalOpen).toHaveBeenCalledWith(false);
  });

  it("should call setNewTaskValue when the task input changes", () => {
    render(<ModalTask {...defaultProps} />);
    const taskInput = screen.getByPlaceholderText("Type Here");
    fireEvent.change(taskInput, { target: { value: "New Task" } });
    expect(mockSetNewTaskValue).toHaveBeenCalledWith("New Task");
  });

  it("should call setNewTaskDescription when the description input changes", () => {
    render(<ModalTask {...defaultProps} />);
    const descriptionInput = screen.getByPlaceholderText("Description");
    fireEvent.change(descriptionInput, { target: { value: "New Description" } });
    expect(mockSetNewTaskDescription).toHaveBeenCalledWith("New Description");
  });

});
