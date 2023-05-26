import { ReactNode } from "react";

type TodoItemProps = {
  text: string;
  children?: ReactNode;
};

export default function TodoItem(props: TodoItemProps) {
  return <li>{props.text}</li>;
}
