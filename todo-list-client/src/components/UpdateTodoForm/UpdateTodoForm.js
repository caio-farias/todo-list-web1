import React, { useState, useContext } from "react"
import { Button } from ".."
import TodoListDashboardContext from '../../pages/TodoListDashboard/context'
import './index.scss'

const UpdateTodoForm = ({ index, todoTask }) =>{
  const { updateTodoOnPanel } = useContext(TodoListDashboardContext)
  const [ newTodoTask, setNewTodoTask ] = useState(todoTask.task)

  return(
    <>
      <div className="update-todo-form">
        <label> Insira atualize a tarefa abaixo: </label>
        <textarea 
          name="todo-task" 
          id="task-name-field" 
          cols="3" 
          rows="3"
          value={newTodoTask}
          onChange={ e => setNewTodoTask(e.target.value) }
          />
        <Button
          onClick={() => updateTodoOnPanel(index, newTodoTask)}
          >
            Atualizar
          </Button>
      </div>  
    </>
  )
}

export default UpdateTodoForm