import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const AppContext = createContext(
  //     {
  //     todos:[],
  //     setTodos:()={},
  // }
  {}
);

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filterTodos, setFilterTodos] = useState(todos);
  useEffect(() => setFilterTodos(todos), [todos]);
  return (
    <AppContext.Provider
      value={{ todos, setTodos, filterTodos, setFilterTodos }}
    >
      {children}
    </AppContext.Provider>
  );
};

// use context
