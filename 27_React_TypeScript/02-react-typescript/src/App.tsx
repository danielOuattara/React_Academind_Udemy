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

import Todos from "./components/Todos";
import TodoClass from "./models/todoClass";

const items = [
  new TodoClass("learn react"),
  new TodoClass("learn typescript"),
  new TodoClass("learn deno"),
];

function App() {
  return (
    <div>
      <Todos items={items}>
        <h2>Listing all todos</h2>
      </Todos>
    </div>
  );
}

export default App;
