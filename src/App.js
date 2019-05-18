import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store/index";
import TodoList from "./TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
