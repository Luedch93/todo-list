import React, { useState, useRef } from 'react'

const Input = ({ onAddTodo, onClickCompleted }) => {
  const [todo, setTodo] = useState('')
  const inputEl = useRef(null);

  const handleKeyPress = ({ key }) => {
    if (key == 'Enter') {
      onAddTodo({ name: todo, selected: false })
      setTodo('')
      inputEl.current.focus();
    }
  }

  const handleClickButton = () => {
    onAddTodo({ name: todo, selected: false })
    setTodo('')   
    inputEl.current.focus();
  }

  

  return (
    <div>
      <input
        onChange={e => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        value={todo}
        type="text"
        autoComplete="false"
        placeholder="Add a new Task"
        ref={inputEl}
      ></input>
      <button onClick={handleClickButton}>
        Add Todo
      </button>
      <button onClick={onClickCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default Input
