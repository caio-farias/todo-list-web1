import React, { useState, useContext } from "react"
import { Button } from ".."
import moment from 'moment'
import TodoListDashboardContext from '../../pages/TodoListDashboard/context'
import './index.scss'

const AddTodoForm = ({ status }) =>{
  const { createTodoOnPanel } = useContext(TodoListDashboardContext)
  const [ newTodoTask, setNewTodoTask ] = useState('')
  
  const addTodo = async () =>{
    const newTodo = {
      task: newTodoTask,
      status: status,
      date: moment().format('DD/MM/YYYY')
    }
    await createTodoOnPanel(newTodo)
  }

  return(
    <>
      <div className="add-todo-form">
        <label> Insira a nova tarefa abaixo: </label>
        <textarea 
          name="todo-task" 
          id="task-name-field" 
          cols="3" 
          rows="3"
          onChange={ e => setNewTodoTask(e.target.value) }
          />
        <Button onClick={() => addTodo()}>+</Button>
      </div>  
    </>
  )
}

export default AddTodoForm