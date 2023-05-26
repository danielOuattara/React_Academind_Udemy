import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./context/TodosContext";

export default function AppContextAPIVersion2() {
  return (
    <TodosContextProvider>
      <p>context API version 2</p>
      <NewTodo />
      <Todos>
        <h2>Listing all todos</h2>
      </Todos>
    </TodosContextProvider>
  );
}
