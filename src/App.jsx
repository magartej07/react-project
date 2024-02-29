import Filter from "./Comonents/Filter";
import Form from "./Comonents/Form";
import Header from "./Comonents/Header";
import Todo from "./Comonents/Todo";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-stone-900">
      <div className="mx-auto max-w-md min-h-screen bg-stone-950">
        <Header></Header>
        <main className="bg-stone-950 p-5">
          <Form></Form>
          <Filter></Filter>
          <div>
            <Todo />
          </div>
        </main>
      </div>
    </div>
  );
};
export default App;
