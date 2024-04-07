import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="max-w-xl text-center items-center justify-center">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
