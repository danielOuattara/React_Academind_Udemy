// import Todos from "./components/Todos";

// const items = ["learn react", "learn typescript", "learn deno"];

// function App() {
//   return (
//     <div>
//       <Todos items={items}>
//         <h2>Listing all todos</h2>
//       </Todos>
//     </div>
//   );
// }

// export default App;

//--------------------------------------------- NEXT

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoClass from "./models/todoClass";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Array<TodoClass>>([]);

  const handleNewTodo = (textArg: string) => {
    const newTodo = new TodoClass(textArg);
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
  };
  return (
    <div>
      <NewTodo handleNewTodo={handleNewTodo} />
      <Todos todos={todos} handleRemoveTodo={handleRemoveTodo}>
        <h2>Listing all todos</h2>
      </Todos>
    </div>
  );
}

export default App;
