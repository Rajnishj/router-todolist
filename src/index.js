import React from "react";
import ReactDOM from "react-dom";
import TodoRedux from "./todoredux/TodoRedux";
import store from "./store";
import { Provider } from "react-redux";
import Main from "./Main";

// import App from "./App"; this one is for router

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <TodoRedux />
    </Provider> */}
    {/* <App /> This one is for router */}
    <Main /> {/* Todo list without redux*/}
  </React.StrictMode>,
  document.getElementById("root")
);
