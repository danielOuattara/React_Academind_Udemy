import { ReactNode, useRef } from "react";
import styles from "./NewTodo.module.css";

type NewTodoProps = {
  handleNewTodo: (text: string) => void;
  children?: ReactNode;
};

export default function NewTodo(props: NewTodoProps) {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInput.current!.value;
    if (enteredText?.trim()?.length === 0) {
      return;
    }
    props.handleNewTodo(enteredText);
    return (todoTextInput.current!.value = "");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="todo" className={styles.label}>
        Todo text{" "}
      </label>
      <input
        type="text"
        id="text"
        className={styles.input}
        ref={todoTextInput}
      />
      <button>Add todo</button>
    </form>
  );
}
