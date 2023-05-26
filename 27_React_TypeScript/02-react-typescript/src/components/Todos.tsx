import { ReactNode } from "react";

//
//---------------------------------
// // @ React.FC is deprecated !
// //
// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;

//--------------------------------- OR

// type TodosProps = {
//   items: Array<string>;
// };

// export default function Todos(props: TodosProps) {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

//--------------------------------- OR

// type TodosProps = {
//   items: Array<string>;
//   children?: ReactNode;
// };

// export default function Todos({ items, children }: TodosProps) {
//   return (
//     <>
//       {children}
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//--------------------------------- NEXT

import TodoClass from "../models/todoClass";
import TodoItem from "./TodoItem";
type TodosProps = {
  items: Array<TodoClass>;
  children?: ReactNode;
};

export default function Todos({ items, children }: TodosProps) {
  return (
    <>
      {children}
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
}

//------------------------------------------------------
