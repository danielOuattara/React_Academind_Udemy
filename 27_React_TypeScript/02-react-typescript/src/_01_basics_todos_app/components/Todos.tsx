import { ReactNode } from "react";

//
//---------------------------------
// // @ React.FC is deprecated !
// //
// const Todos: React.FC<{ todos: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.todos.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;

//--------------------------------- OR

// type TodosProps = {
//   todos: Array<string>;
// };

// export default function Todos(props: TodosProps) {
//   return (
//     <ul>
//       {props.todos.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

//--------------------------------- OR

// type TodosProps = {
//   todos: Array<string>;
//   children?: ReactNode;
// };

// export default function Todos({ todos, children }: TodosProps) {
//   return (
//     <>
//       {children}
//       <ul>
//         {todos.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//--------------------------------- NEXT

import TodoClass from "./../models/todoClass";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

type TodosProps = {
  todos: Array<TodoClass>;
  children?: ReactNode;
  // handleRemoveTodo: Function;
  handleRemoveTodo: (id: string) => void;
};

export default function Todos(props: TodosProps) {
  return (
    <>
      {props.children}
      <ul className={styles.todos}>
        {props.todos.map((item) => (
          <>
            <TodoItem
              text={item.text}
              id={item.id}
              handleRemoveTodo={props.handleRemoveTodo}
            />
          </>
        ))}
      </ul>
    </>
  );
}

//------------------------------------------------------
