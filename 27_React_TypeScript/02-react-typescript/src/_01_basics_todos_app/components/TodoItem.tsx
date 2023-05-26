import { ReactNode } from "react";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  id: string;
  children?: ReactNode;
  handleRemoveTodo: (id: string) => void;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <li key={props.id} className={styles.item}>
      {props.text}
      <button
        className={styles["remove-btn"]}
        onClick={() => props.handleRemoveTodo(props.id)}
      >
        {" "}
        remove
      </button>
    </li>
  );
}
