import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "../actions/actionType";

const initialState = {
  todos: [{ id: Date.now(), task: "Wake UP ", complete: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const newTodos = {
        id: Date.now(),
        task: action.payload,
      };
      return {
        ...state,
        todos: [...state.todos, newTodos],
      };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case UPDATE_TODOS:
      const updateTodo = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodo,
      };
    default:
      return state;
  }
};

export default todoReducer;
