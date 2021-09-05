import React from "react"

const TodoListDashboard = () => {
  return(
    <>
    <section class="mainPanel px-3">
      <div>
          <div class="ml-5 d-flex">
            <button class="btn btn-primary open-modal-button">Adicionar tarefa</button>
          </div>
          <hr class="h-line" />
          <div class="ml-5 score-panel">
            <span class="task-number">
              À fazer :
              <span class="ml-2" id="number-todo-tasks"></span>
            </span>
            <span class="task-number">
              Concluídas:
              <span class="ml-2" id="number-done-tasks"></span>
            </span>
        </div>
      </div>
    </section>
    </>
  )
}

export default TodoListDashboard
