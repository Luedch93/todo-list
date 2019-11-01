import React, { useState } from 'react'
import Todo from '../components/Todo'

import './TodoList.scss'

const TodoList = ({ todos, onChangeSelected }) => {
  const handleChange = (selected, index) => {
    onChangeSelected(selected, index)
  }

  return (
    <div className="TodoList">
      {todos.length > 0 ? (
        todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            index={i}
            onChangeSelected={handleChange}
          ></Todo>
        ))
      ) : (
        <div className="no-data">You don't have any TODO</div>
      )}
    </div>
  )
}

export default TodoList
