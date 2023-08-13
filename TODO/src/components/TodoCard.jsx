import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';

const TodoCard = ({ id, todo, status, removeTodo, updateTodoStatus }) => {
  return (
    <div className="todoCard">
      <h4>{todo}</h4>
      <p>Status: {status}</p>
      <div className="modifyBtns">
        <button className="editBtn btn-sm" onClick={() => updateTodoStatus(id)}>
          <MdOutlineDone />
        </button>

        <button className="removeBtn btn-sm" onClick={() => removeTodo(id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
