import { ReactNode, createContext, useContext, useState } from "react";
import TodoClass from "../models/todoClass";

//----------
interface Interface_TodosContext {
  todos: Array<TodoClass>;
  handleNewTodo: (text: string) => void;
  handleRemoveTodo: (id: string) => void;
}

//----------
type TypeTodosContext = {
  children: ReactNode;
};

//----------
const TodosContext = createContext<Interface_TodosContext | null>(null);

//----------
export default function TodosContextProvider(props: TypeTodosContext) {
  const [todos, setTodos] = useState<Array<TodoClass>>([]);

  const handleNewTodo = (textArg: string) =>
    setTodos((prevState) => [...prevState, new TodoClass(textArg)]);

  const handleRemoveTodo = (id: string) =>
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);

  return (
    <TodosContext.Provider value={{ todos, handleNewTodo, handleRemoveTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}

//----------
export const useTodosContext = () => {
  return useContext(TodosContext);
};
