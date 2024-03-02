import { useEffect, useState } from "react";
import Filter from "./Comonents/Filter";
import Form from "./Comonents/Form";
import Header from "./Comonents/Header";
import Todo from "./Comonents/Todo";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const [appState, setAppState] = useState();
  const [todos, setTodos] = useLocalStorage("todos",[
    // {
    //   id: 1,
    //   title: "Complete online JavaScript course",
    //   completed: true,
    // },
  ]);


  const [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => setFilterTodos(todos), [todos]);

  return (
    <div className="min-h-screen w-full bg-stone-900">
      <div className="mx-auto min-h-screen max-w-md bg-stone-950">
        <Header></Header>
        <main className="bg-stone-950 p-5">
          <Form todos={todos} setTodos={setTodos}></Form>
          <Filter todos={todos} setFilterTodos={setFilterTodos}></Filter>
          <div>
            {filterTodos.map((todo) => (
              <Todo key={todo.id} setTodos={setTodos} todo={todo} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default App;
