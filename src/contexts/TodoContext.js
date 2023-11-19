import React, { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todos msg",
      completed: false,
    },
  ],
  addTodo:(todo)=>{},
  upDateTodo: (id,todo)=>{},
  deleteTodo:(id)=>{},
  ToggelComplete:(id)=>{}
});

export const useTodo = () =>( useContext(TodoContext));

export const TodoProvider = TodoContext.Provider;
