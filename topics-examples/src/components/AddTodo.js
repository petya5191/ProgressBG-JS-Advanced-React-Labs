import React from 'react';
import "./css/todos.css";

export default function AddTodo(props) {


  return  (
    <div className="addTodo">
      <input type="text" onChange={props.onGetTodo}/>
      <button id='btn1' onClick={props.onAddTodo}>Add</button>
    </div>
  )
}
