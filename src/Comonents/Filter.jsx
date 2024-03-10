import { useContext } from "react";
import { AppContext } from "../AppContext";

const Filter = () => {
    const {todos,setFilterTodos}= useContext(AppContext)
  return (
    <div className="my-3 flex items-center justify-between text-white">
      <h2 className="text-xl font-bold">YOUR TODOS</h2>
      <div className="space-x-3">
        <button
          className="h-10 rounded bg-stone-600 px-3 text-white"
          onClick={() => setFilterTodos(todos)}
        >
          All
        </button>
        <button
          className="h-10 rounded bg-stone-600 px-3 text-white"
          onClick={() =>
            setFilterTodos(todos.filter((todo) => !todo.completed))
          }
        >
          Actives
        </button>
      </div>
    </div>
  );
};
export default Filter;
