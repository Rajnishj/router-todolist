import React from "react";
import { useDispatch } from "react-redux";

import { deleteTodos } from "../../actions/action";
const Todo = ({ todo, editTodoItem }) => {
  console.log(todo);
  const dispatch = useDispatch();
  const deleteTodoItem = () => {
    dispatch(deleteTodos(todo.id));
  };
  // const editTodoItem = () => {
  //   dispatch(updateTodos(todo));
  // };
  return (
    <div className="item-inner">
      <p>{todo.task}</p>
      <div className="button-group">
        <button onClick={() => editTodoItem(todo.task)}>Edit</button>
        <button onClick={deleteTodoItem}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
