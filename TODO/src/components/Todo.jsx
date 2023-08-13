import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import {
  getTodoFromLocalStorage,
  saveTodoToLocalStorage,
} from '../helper/helperFn';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleTodos = () => setTodos(getTodoFromLocalStorage());

  const saveTodo = () => {
    const todoObj = {
      id: new Date().getTime().toString(),
      todo: todoInput,
      status: 'Pending',
    };
    saveTodoToLocalStorage([...todos, todoObj]);
    handleTodos();
  };

  const removeTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
    saveTodoToLocalStorage(filteredTodo);
  };

  const updateTodoStatus = (id) => {
    const updateIndex = todos.findIndex((todo) => todo.id === id);
    const updatedTodoList = todos.map((todo, i) => {
      if (i === updateIndex) {
        return {
          ...todo,
          status: 'Completed',
        };
      }
      return todo;
    });
    saveTodoToLocalStorage(updatedTodoList);
    handleTodos();
  };

  useEffect(() => {
    handleTodos();
  }, []);

  return (
    <>
      <div className="inp-box">
        <input
          type="text"
          name="todo"
          className="inp"
          placeholder="Enter the task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="btn addBtn" onClick={saveTodo}>
          Add
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <TodoCard
            key={todo?.id}
            {...todo}
            removeTodo={removeTodo}
            updateTodoStatus={updateTodoStatus}
          />
        );
      })}
    </>
  );
};

export default Todo;
