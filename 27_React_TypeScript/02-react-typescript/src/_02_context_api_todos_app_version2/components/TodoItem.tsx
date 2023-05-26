import { ReactNode } from "react";
import styles from "./TodoItem.module.css";
import { useTodosContext } from "../context/TodosContext";

//----------
type TodoItemProps = {
  text: string;
  id: string;
  children?: ReactNode;
};

//----------
export default function TodoItem(props: TodoItemProps) {
  const { handleRemoveTodo } = useTodosContext();
  return (
    <li key={props.id} className={styles.item}>
      {props.text}
      <button
        className={styles["remove-btn"]}
        onClick={() => handleRemoveTodo(props.id)}
      >
        {" "}
        remove
      </button>
    </li>
  );
}
