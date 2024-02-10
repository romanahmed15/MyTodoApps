import React, { useState } from 'react'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//add css
import style from './Home.module.css'
import NewAddTodo from './NewAddTodo'

const Home = () => {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    toast("New todo is added.")
    setTodos((prvsTodo) =>{
      return [...prvsTodo , { id: uuidv4(), todo}]
    })
    
  }
  const hendleRemovedTodo = (id) => {
    toast("Todo is deleted.")
    setTodos((prvsTodos) => {
      const filteredTodos =prvsTodos.filter((todo) => todo.id != id)
        return filteredTodos
    })
  }
  return (
    <div className={style.container}>
      <h1 className={style.head}>TODO APPS</h1>
      <NewAddTodo onAddTodo ={handleAddTodo}/>
      <Todos  todos ={todos} onHandleTodo ={hendleRemovedTodo}/>
      <ToastContainer />
    </div>
  )
}

export default Home
