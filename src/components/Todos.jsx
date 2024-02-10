import React from 'react'
import Todo from './Todo'
//add css
import style from './Todos.module.css'

const Todos = (props) => {
  
  return (
    <section className={style.todos}>
      {
        props.todos.map((todo) => 
        <Todo todo ={todo.todo} 
        key={todo.id} 
        id ={todo.id} onHandleTodo={props.onHandleTodo}/> )
      }
    </section>
  )
}

export default Todos
