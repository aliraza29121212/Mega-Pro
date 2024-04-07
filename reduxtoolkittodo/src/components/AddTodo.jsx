import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("please add text");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  const editTodoHandler = (e) => {
    // e.preventDefault();
    console.log("working");
  };
  return (
    <>
      <form className="space-x-3 mt-12 flex">
        <input
          type="text"
          className="min-h-12 p-4 bg-gray-800 rounded border border-gray-700  focus:border-indigo-500 focus:ring-2 focus:indigo-900 text-base-outline-none lock w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          placeholder="Enter a todo.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodoHandler}
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
        <button
          onClick={editTodoHandler}
          type="submit"
          className="text-white bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Edit Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
