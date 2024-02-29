import AddIcons from "./icons/AddIcons";

const Form = () => {
  return (
    <form className="flex items-center rounded border border-gray-600 bg-stone-950 text-white">
      <input
        type="text"
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
