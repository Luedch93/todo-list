import React, { useState } from 'react'

import Input from '../components/Input'

import './App.scss'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleSaveTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div id="App">
      <h1>Todo App</h1>      
      <Input onAddTodo={handleSaveTodo}></Input>
    </div>
  )
}

export default App
