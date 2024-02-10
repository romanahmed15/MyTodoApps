import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

//add css
import style from './Todo.module.css'


const Todo = (props) => {
  const{title,desc} = props.todo
  const{id} = props

  const handleClicked = (id) => {
    props.onHandleTodo(id)
  }

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn} onClick={() => {handleClicked(id)}}>
          <FaRegTrashCan />
        </button>
      </div>
    </article>
  )
}

export default Todo
