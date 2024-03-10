import { CheckIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Todo = ({ todo }) => {
    const {setTodos}= useContext(AppContext)
  return (
    <div className="flex h-12 items-center justify-between rounded border border-gray-600 px-2 text-white">
      <div className="flex gap-3">
        <input
          type="checkbox"
          className="peer hidden"
          id={`todo-${todo.id}`}
          defaultChecked={todo.completed}
          onChange={(e) => {
            setTodos((prev) =>
              prev.map((t) => {
                if (t.id === todo.id) {
                  t.completed = e.target.checked;
                }
                return t;
              }),
            );
          }}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className="flex h-6 w-6 items-center justify-center border peer-checked:[&>.checkicon]:flex"
        >
          <CheckIcon className="checkicon hidden h-4 w-4" />
        </label>
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </div>
      <div>
        <button
          onClick={() => {
            setTodos((prev) => {
              const newTodoState = prev.filter((t) => t.id !== todo.id);
              return newTodoState;
            });
          }}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
export default Todo;

//npm i lucide-react
