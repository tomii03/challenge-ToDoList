import { TaskInterface } from '@/types/tasks'
import React from 'react'

interface ListProps {
    tasks:TaskInterface[]
}

const TodoList: React.FC<ListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        {tasks.map(task =>(
            <tr key={task.id}>
                <td>{task.text}</td>
                <td>{task.description}</td>
            </tr>
        ))}
      {/* task 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <th>
          <button className="btn btn-success btn-xs">Edit</button>
        </th>
        <th>
          <button className="btn btn-warning btn-xs">Delete</button>
        </th>
      </tr>
      
    </tbody>
            {/* foot
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </tfoot> */}
  </table>
</div>
  )
}

export default TodoList