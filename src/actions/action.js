import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionType";

export const addTodos = (todo) => {
  return {
    type: ADD_TODOS,
    payload: todo,
  };
};

export const deleteTodos = (id) => {
  return {
    type: DELETE_TODOS,
    payload: id,
  };
};

export const updateTodos = (todo) => {
  return {
    type: UPDATE_TODOS,
    payload: todo,
  };
};
