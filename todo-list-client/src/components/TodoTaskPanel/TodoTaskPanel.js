import React from "react"
import { TodoTaskList } from '..'
import './index.scss'

const TodoTaskPanel = () => (
  <>
    <section className="todo-task-panel">
      <TodoTaskList 
        name="Pendentes" 
        status='pending'
        />
      <TodoTaskList 
        name="Em andamento" 
        status='working'
      />
      <TodoTaskList 
        name="Prontas" 
        status='done'
        />
    </section>
  </>
)

export default TodoTaskPanel