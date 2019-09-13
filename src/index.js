import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h4>List of things...</h4>
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
