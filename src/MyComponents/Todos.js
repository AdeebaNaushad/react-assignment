import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className="container">
    <h4 className="text-center my-3">
      My Todos List
    </h4>
  
    {props.todos.map((item) => (
      <TodoItem todo={item} />
    ))}
  </div>
  
  )
}
