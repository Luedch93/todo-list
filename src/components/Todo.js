import React, {useState} from 'react';

import './Todo.scss';

const Todo = ({index, todo, onChangeSelected}) => {

  const handleCheckEvent = (e) => {

    onChangeSelected(e.target.checked, index)
  }

  return (
    <div className="Todo">
      <input type="checkbox" defaultChecked={todo.selected} onChange={handleCheckEvent}></input>  
      <span className={todo.selected ? 'completed' : ''}>{todo.name}</span>
    </div>
  )
}

export default Todo