import React from 'react'

export default function TodoItem({todo}) {
  return (
  
     
   
    <div className="col-sm-6 mx-auto my-2 text-dark">
    <div className="card" style={{ backgroundColor: "#adeeba" }}>
      <div className="card-body" style={{ backgroundColor: "#adeeba" }}>
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
  

  
  )
}
