import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodos, updateTodos } from "../actions/action";
import "./todo.css";
import Todo from "../components3/todo/Todo";

const TodoRedux = () => {
  const todoList = useSelector((state) => ({ ...state }));
  const [task, setTask] = useState("");
  const [isEdting, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const dispatch = useDispatch();
  console.log(todoList);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodos(task));
    setTask("");
  };
  const editTodoItem = (task) => {
    dispatch(updateTodos(task));
    setIsEditing(true);
    setEditTask(task);
  };
  return (
    <div className="TodoList">
      <h1>Todo List with Redux</h1>
      <form className="TodoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter todo"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">{isEdting ? "Save" : "Add"}</button>
      </form>
      <div className="todo-item">
        {todoList.todos &&
          todoList.todos.map((todo) => {
            return (
              <Todo editTodoItem={editTodoItem} key={todo.id} todo={todo} />
            );
          })}
      </div>
    </div>
  );
};

export default TodoRedux;
