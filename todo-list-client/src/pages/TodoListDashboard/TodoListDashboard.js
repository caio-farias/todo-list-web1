import React, { useEffect, useState, useCallback } from "react"
import { TodoTaskPanel } from '../../components'
import api from '../../api'
import { getUserId } from "../../utils"
import { produce } from 'immer'
import TodoListDashboardContext from './context'
import './index.scss'

const TodoListDashboard = () => {
  const [ user, setUser ] = useState({})
  const [ todoList, setTodoList ] = useState(null)

  const getUserData = async () =>{
    const id = getUserId()
    try {
      const res = await api.get(`/users/${id}`)
      return res.data
    } catch (error) {
      return null 
    }
  }

const updateUserData = useCallback(
  async (todoList) => {
      try {
        await api.put(`/users/todo-list/${getUserId()}`, {
          todo_list: todoList
        })
      } catch (error) {
      }
    },
  [],
)

  useEffect(() => {
    const getUser = async() => {
      let user = await getUserData()
      if(!user)
        return
      setUser(user)
      setTodoList(user.todo_list)
    }
    getUser()
  }, [])


  useEffect(() => {
    const updateTodo = async () => {
      if(todoList == null)
        return
      await updateUserData(todoList)
    }
    updateTodo()
  }, [todoList, updateUserData])
  

  const updateTodoStatus = async (index, status) =>{
    setTodoList(
      produce(draft => {
        const todo = draft[index]
        todo.status = status
      })
    )
  }

  const createTodoOnPanel = newTodo => {
    setTodoList(
      produce(draft =>{
          draft.push(newTodo)
        }
      ))
  }

  const updateTodoOnPanel = async (index, newTask) => {
    setTodoList(
      produce(draft =>{
        draft[index].task = newTask
        })
    )
  }

  const deleteTodoOnPanel = async (index) =>{
    setTodoList(
      produce(draft =>{
        draft.splice(index, 1)
      }
    ))
  }

  return(
    <section className="dashboard">
      <section className="mainPanel">
        <div>
          <TodoListDashboardContext.Provider 
            value={{ 
              todoList, 
              createTodoOnPanel,
              updateTodoOnPanel,
              updateTodoStatus,
              deleteTodoOnPanel
            }}>
            <TodoTaskPanel />
          </TodoListDashboardContext.Provider>
        </div>
      </section>
    </section>
  )
}

export default TodoListDashboard
