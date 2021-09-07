import React, { useState, useContext } from 'react'
import { useDrop } from 'react-dnd'
import { TodoTask, Modal, AddTodoForm, UpdateTodoForm, Button } from '..'
import TodoListDashboardContext from '../../pages/TodoListDashboard/context'
import './index.scss'

const TodoTaskList = ({ name, status }) => {
  const { todoList } = useContext(TodoListDashboardContext)
  const [ todoTaskIndex, setTodoTaskIndex ] = useState(null)
  const [ showModal, setShowModal ] = useState(false)
  
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: () => ({ status }),
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver;
  return (
    <section className="todo-task-list" ref={drop}>
      <div className="todo-task__header">
        <span>{name}</span>    
        {status === 'pending' && (
          <>
            <Modal showModal={showModal} setShowModal={() => setShowModal(false)}>
              <AddTodoForm status={status}/>
            </Modal>
            <Button onClick={() => setShowModal(true)}>+</Button>
          </>
          )}
      </div>
      <div className="todo-task__body" role='BOX'>
        { todoList !== null && todoList.map((todo, i) => 
          todo.status === status && (
            <TodoTask 
              key={todo.task + i}
              setTask={setTodoTaskIndex}
              index={i}
              task={todo.task} 
              status={todo.status} 
              date={todo.date}
            />
          )
        )}
        {isActive && (<div className="project-todo-task"/>)}
      </div>
      {(todoTaskIndex !== null && 
        <Modal showModal={todoTaskIndex !== null} setShowModal={() => setTodoTaskIndex(null)}>
          <UpdateTodoForm index={todoTaskIndex} todoTask={todoList[todoTaskIndex]} />
        </Modal>)}
    </section>
  )
}

export default TodoTaskList
