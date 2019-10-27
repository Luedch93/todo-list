import React, { useState } from 'react'

const Input = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('')

  const handleKeyPress = ({ key }) => {
    if (key == 'Enter') {
      onAddTodo({ name: todo, selected: true })
      setTodo('')
    }
  }

  const handleClickButton = () => {
    onAddTodo({ name: todo, selected: true })
    setTodo('')    
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
      ></input>
      <button onClick={handleClickButton}>
        Add Todo
      </button>
    </div>
  )
}

export default Input
