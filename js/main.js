const tasks = document.querySelectorAll(".task-card")
const toDoTasks = document.querySelector(".todo-task-panel")
const openModalButton = document.querySelector(".open-modal-button")
const addTaskButton = document.getElementById("add-task-button")
const toDoTasksDOM = document.querySelectorAll(".todo-task-panel")[0]
const doneTasksDOM = document.querySelectorAll(".todo-task-panel")[1]

// DOM do evento dragstart
var currentTask;

function addDragEventListener(element){
  element.addEventListener("dragover", dragOverPanel);
  element.addEventListener("dragenter", dragEnterPanel);
  element.addEventListener("dragleave", dragLeavePanel);
  element.addEventListener("drop", dragDropPanel);
}


function addDragEventListenerToTask(){
  const tasksDOM = document.querySelectorAll(".task-card")
  for (const task of tasksDOM) {
    task.addEventListener("dragstart", taskDragStart);
    task.addEventListener("dragend", taskDragEnd);
  }
}

// Eventos de interaçôes
addDragEventListenerToTask()
addDragEventListener(toDoTasksDOM)
addDragEventListener(doneTasksDOM)
//contagem de tasks 
countTasks()

//adição das funções de butão
deleteTodoTaskFunctionToButton()
deleteDoneTaskFunctionToButton()

//adição das funções de click
openModalButton.onclick = function(){
  const modal = document.querySelector("#addTaskForm");
  modal.className += " show";
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("style", "display: flex");
}

addTaskButton.onclick = function(){
  var taskName = document.getElementById("task-name-field").value
  const newTask = createTaskCard(taskName)
  toDoTasks.prepend(newTask)
  document.getElementById("task-name-field").value = ''
  addDragEventListenerToTask()
  deleteTodoTaskFunctionToButton()
  countTasks()
}

// Funçôes dos eventos
function taskDragStart() {
  currentTask = this;
  setTimeout(() => (this.className = "invisible"), 0);
}

function taskDragEnd() {
  this.className = "task-card";
}

//Funcoes de eventos painel de toDoTasksObject
function dragOverPanel(e) {
  e.preventDefault();
}

function dragEnterPanel(e) {
  e.preventDefault();
}

function dragLeavePanel() {
}

function dragDropPanel() {
  if(currentTask){
    this.prepend(currentTask);
    countTasks()
  }
}

//criação de task card
function createTaskCard(taskName){
  const button = document.createElement("button")
  button.className += "delete-todo-task-button"
  button.textContent = 'x'

  const span = document.createElement("span")
  span.textContent = taskName
  
  const taskCard = document.createElement("div")
  taskCard.className = "task-card"
  taskCard.setAttribute("draggable", "true")
  taskCard.append(button)
  taskCard.append(span)
  return taskCard
}

//funções de botao
function deleteTodoTaskFunctionToButton(){
  const deleteToDoTaskButton = document.querySelectorAll(".delete-todo-task-button")
  for(const button of deleteToDoTaskButton){
    button.onclick = function() {
      deleteTask(this)
    }
  }
}

function deleteDoneTaskFunctionToButton(){ 
  const deleteDoneTaskButton = document.querySelectorAll(".delete-done-task-button")
  for(const button of deleteDoneTaskButton){
    button.onclick = function() {
      deleteTask(this)
    }
  }
}

function deleteTask (target) {
  target.parentNode.remove()
  countTasks()
}


//contadores de task
function countTasks(){
  countDoneTasks()
  countToDoTasks()
}

function countToDoTasks() {
  let toDoTasksNumber = document.getElementById("todo-panel").childElementCount;
  document.querySelector("#number-todo-tasks").textContent = `${toDoTasksNumber}`;
}

function countDoneTasks() {
  let doneTasksNumber = document.getElementById("done-panel").childElementCount;
  document.querySelector("#number-done-tasks").textContent = `${doneTasksNumber}`;
}

