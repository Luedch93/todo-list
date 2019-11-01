import React, { useState } from 'react'

import Input from '../components/Input'
import TodoList from '../containers/TodoList'

import './App.scss'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleSaveTodo = todo => {
    if (todo.name.trim()) {
      setTodos([...todos, todo])
    }
  }

  const clearAllCompletedTasks = () => {
    setTodos(todos.filter(todo => !todo.selected))
  }

  const handleChange = (selected, index) => {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return {...todo, selected}
      }
      return todo;
    }))
  }

  return (
    <div id="App">
      <h1>Todo App</h1>      
      <Input onAddTodo={handleSaveTodo} onClickCompleted={clearAllCompletedTasks}></Input>
      <TodoList todos={todos} onChangeSelected={handleChange}></TodoList>
    </div>
  )
}

export default App
