import { useContext, useEffect, useState } from "react";
import Filter from "./Comonents/Filter";
import Form from "./Comonents/Form";
import Header from "./Comonents/Header";
import Todo from "./Comonents/Todo";
import { useLocalStorage } from "usehooks-ts";
import { AppContext, AppProvider } from "./AppContext";
import TodoList from "./Comonents/TodoList";

const App = () => {
  // const{filterTodos}=useContext(AppContext)
  // const [appState, setAppState] = useState();
  // const [todos, setTodos] = useLocalStorage("todos",[
  //   // {
  //   //   id: 1,
  //   //   title: "Complete online JavaScript course",
  //   //   completed: true,
  //   // },
  // ]);

  // const [filterTodos, setFilterTodos] = useState(todos);

  // useEffect(() => setFilterTodos(todos), [todos]);

  return (
    <AppProvider>
      <div className="min-h-screen w-full bg-stone-900">
        <div className="mx-auto min-h-screen max-w-md bg-stone-950">
          <Header></Header>
          <main className="bg-stone-950 p-5">
            <Form></Form>
            <Filter></Filter>
            <TodoList/>
          </main>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
