import { createSlice, nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";

const initialState = {
  todos: [{ id: 1, text: "hello todo" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );

      state.todos.forEach((todo) => {
        const editVal = todo.text;
        console.log(editVal);
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
