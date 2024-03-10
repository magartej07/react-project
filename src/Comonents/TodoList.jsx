import { useContext } from "react";
import { AppContext } from "../AppContext";
import Todo from "./Todo";

const TodoList = () => {
    
  const{filterTodos}=useContext(AppContext)
  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      {filterTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
