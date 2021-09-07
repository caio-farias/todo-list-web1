import React, { useContext } from 'react'
import { useDrag } from 'react-dnd'
import TodoListDashboardContext from '../../pages/TodoListDashboard/context'
import './index.scss'

const TodoTask = ({ 
  task, 
  status, 
  date, 
  index,
  setTask,
}) => {
  const { 
    updateTodoStatus,
    deleteTodoOnPanel,
  } = useContext(TodoListDashboardContext)

  const [{ isDragging }, dragRef] = 
    useDrag({
      type: "CARD",
      item: { index },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult)
          updateTodoStatus(index, dropResult.status)
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    })

  return isDragging ? (
  <div className="todo-task--grabbing" role={'CARD'}/>
  ) :(
    <>
      <div className={`todo-task--${status}`} ref={dragRef} role={'CARD'}>
        <div className="todo-task-buttons-wrapper">
          <button onClick={() => setTask(index)}>+</button>
          <button onClick={() => deleteTodoOnPanel(index)}>-</button>
        </div>
        <span className="todo-task__name">{task}</span>
        <span className="todo-task__date">{date}</span>
      </div>
    </>  
  )
}

export default TodoTask