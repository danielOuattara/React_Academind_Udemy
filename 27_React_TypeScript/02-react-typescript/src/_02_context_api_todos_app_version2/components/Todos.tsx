import { ReactNode } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { useTodosContext } from "../context/TodosContext";

//----------
type TodosProps = {
  children?: ReactNode;
};

//----------
export default function Todos(props: TodosProps) {
  const { todos } = useTodosContext();

  return (
    <>
      {props.children}
      <ul className={styles.todos}>
        {todos.map((item) => (
          <>
            <TodoItem text={item.text} id={item.id} />
          </>
        ))}
      </ul>
    </>
  );
}

//------------------------------------------------------
