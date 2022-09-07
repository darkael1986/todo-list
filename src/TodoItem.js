import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  const completeTodo = (msg)=>{  
    alert(msg);     
  }


  const deleteTodo = (msg)=>{
    alert(msg);
  }


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick = {()=>completeTodo(`Completaste ${props.text}`)}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick ={()=> deleteTodo(`Borraste ${props.text}`)}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };