/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';
import { useAddTask } from '@/app/components/AddTask/useAddTask';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('useAddTask hook', () => {
  let mockRouter: any;

  beforeEach(() => {
    mockRouter = {
      refresh: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    localStorage.clear(); // Aseguramos que localStorage esté limpio antes de cada test
  });

  it('should initialize the task state correctly', () => {
    const { result } = renderHook(() => useAddTask());

    expect(result.current.modalOpen).toBe(false);
    expect(result.current.newTaskValue).toBe('');
    expect(result.current.newTaskDescription).toBe('');
  });

});
