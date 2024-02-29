import { CheckIcon, TrashIcon } from "lucide-react";

const Todo = () => {
  return (
    <div className="flex h-12 items-center justify-between rounded border border-gray-600 px-2 text-white">
      <div className="flex gap-3">
        <input type="checkbox" className="peer hidden" id="todo1" />
        <label
          htmlFor="todo1"
          className="flex h-6 w-6 items-center justify-center border peer-checked:[&>.checkicon]:flex"
        >
          <CheckIcon className="checkicon hidden h-4 w-4" />
        </label>
        <span>ToDo One</span>
      </div>
      <div>
        <button>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
export default Todo;

//npm i lucide-react
