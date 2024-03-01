import { useState } from "react";
import AddIcons from "./icons/AddIcons";

const Form = ({setTodos, todos}) => {
    const [input,setInput]= useState("")
    const onSubmit = (e)=>{
        e.preventDefault()
        const newTodos = {
            id: todos.length + 1,
            title:input,
            completed:false,
        }
        setTodos([newTodos, ...todos])
        setInput("")
    }
  return (
    <form onSubmit={onSubmit} className="flex items-center rounded border border-gray-600 bg-stone-950 text-white">
      <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Enter your todo."
        className="h-10 flex-1 border-0 bg-transparent px-2 outline-none"
      />
      <button type="submit" className="h-10 px-2">
        <AddIcons className="h-6 w-6"></AddIcons>
      </button>
    </form>
  );
};
export default Form;
//for react icons lucide icons
