// import { useRef } from "react";
// import classes from "./TaskForm.module.css";
// import Section from "../UI/Section";
// import useHttp from "../../hooks/useHttp";

// const TaskForm = (props) => {
//   const taskInputRef = useRef();
//   const sendData = useHttp();

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const enteredValue = taskInputRef.current.value;

//     if (enteredValue.trim().length > 0) {
//       sendData(props.url, "POST", { task: taskInputRef.current.value });
//     }
//     taskInputRef.current.value = "";
//   };
//   // const { isLoading, error } = useFetch(props.url, "POST", {task: });

//   return (
//     <Section>
//       <form className={classes.form} onSubmit={submitHandler}>
//         <input type="text" ref={taskInputRef} />
//         <button type="submit">
//           {props.loading ? "Sending..." : "Add Task"}
//         </button>
//       </form>
//     </Section>
//   );
// };

// export default TaskForm;

//======================================================================

import { useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    taskInputRef.current.value = ""
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
