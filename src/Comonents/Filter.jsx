const Filter = () => {
  return (
    <div className="my-3 flex items-center justify-between text-white">
      <h2 className="text-xl font-bold">YOUR TODOS</h2>
      <div className="space-x-3">
        <button className="h-10 rounded bg-stone-600 px-3 text-white">
          All
        </button>
        <button className="h-10 rounded bg-stone-600 px-3 text-white">
          Actives
        </button>
      </div>
    </div>
  );
};
export default Filter;
