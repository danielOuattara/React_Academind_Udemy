// import useHttp from "../../hooks/useHttp";
// import Section from "../UI/Section";
// import TaskItem from "./TaskItem";
// import classes from "./Tasks.module.css";

// const Tasks = (props) => {
//   const { isLoading, error, tasks } = useHttp(props.url, "GET", null);

//   let taskList = <h2>No tasks found. Start adding some!</h2>;

//   if (tasks.length > 0) {
//     taskList = (
//       <ul>
//         {tasks.map((task) => (
//           <TaskItem key={task.id}>{task.text}</TaskItem>
//         ))}
//       </ul>
//     );
//   }

//   let content = taskList;

//   if (error) {
//     content = <button onClick={props.onFetch}>Try again</button>;
//   }

//   if (isLoading) {
//     content = "Loading tasks...";
//   }

//   return (
//     <Section>
//       <div className={classes.container}>{content}</div>
//     </Section>
//   );
// };

// export default Tasks;


//================================================================================


import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
