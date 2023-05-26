class TodoClass {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = Math.random().toString();
  }
}

export default TodoClass;
