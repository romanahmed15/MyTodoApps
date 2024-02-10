import React, { useState } from 'react'

//add css
import style from './NewAddTodo.module.css'

const NewAddTodo = (props) => {
  const [todo,setTodo] = useState({title: "", desc: ""})
  const{ title, desc } = todo

  const handleChange = (e) => {
    const name = e.target.name
    setTodo( (oldTodo) => {
      return {...oldTodo, [name]: e.target.value}
    })
  }

  const handleSubmite = (e) => {
    e.preventDefault()
    props.onAddTodo(todo)
    setTodo( { title : "" , desc : "" } )
    
  }


  return (
    <form className={style.form} onSubmit={handleSubmite} >
     <div className={style.formField}>
      <label htmlFor="title">Title : </label>
      <input type="text" id='title' name='title' value={title} onChange={handleChange} />
     </div>

     <div className={style.formField}>
      <label htmlFor="desc">Description : </label>
      <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange} />
     </div>
     <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewAddTodo
