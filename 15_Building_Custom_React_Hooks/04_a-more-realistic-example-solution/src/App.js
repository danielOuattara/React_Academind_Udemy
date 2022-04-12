// import { Fragment } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import TaskForm from "./components/NewTask/TaskForm";

// const url =
//   "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

// function App() {
//   return (
//     <Fragment>
//       <TaskForm url={url} />
//       <Tasks url={url} />
//     </Fragment>
//   );
// }

// export default App;

//==========================================================================================

// import React, { useEffect, useState, useCallback } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import NewTask from "./components/NewTask/NewTask";
// import useHttp from "./hooks/useHttp";

// const url =
//   "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const tasksTranformer = useCallback(
//     (data) => {
//       const loadedTasks = [];
//       for (const taskKey in data) {
//         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//       }
//       setTasks(loadedTasks);
//     },
//     []
//   );

//   const {
//     isLoading,
//     error,
//     sendRequest: fetchTasks,
//   } = useHttp({ url }, tasksTranformer);

//   useEffect(
//     () => {
//       fetchTasks();
//     },
//     [fetchTasks ]
//   );

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} fetchTasks={fetchTasks} url={url} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

// export default App;

// ================================================================================

/* Try not to use React.memo to garanty that url wont change on re-render, causing
the app to re-render itself infinitly */

// import React, { useEffect, useState, useCallback } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import NewTask from "./components/NewTask/NewTask";
// import useHttp from "./hooks/useHttp";

// const url =
//   "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const tasksTranformer = useCallback((data) => {
//     const loadedTasks = [];
//     for (const taskKey in data) {
//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//     }
//     setTasks(loadedTasks);
//   }, []);

//   const {
//     isLoading,
//     error,
//     sendRequest: fetchTasks,
//   } = useHttp(tasksTranformer);

//   useEffect(() => {
//     fetchTasks({url});
//   }, [fetchTasks]);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} fetchTasks={fetchTasks} url={url} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

// export default App;

// ================================================================================

/* Try to avoid useCallback */

import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

const url =
  "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const tasksTranformer = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url }, tasksTranformer);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} url={url} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
