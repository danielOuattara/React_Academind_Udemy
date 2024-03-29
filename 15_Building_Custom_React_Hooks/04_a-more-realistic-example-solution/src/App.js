/* N°1 */

// import React, { useEffect, useState, useCallback } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import NewTask from "./components/NewTask/NewTask";
// import useHttp from "./hooks/useHttp";

// const url =
//   "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const tasksTransformer = useCallback((data) => {
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
//   } = useHttp({ url }, tasksTransformer);

//   useEffect(
//     () => {
//       fetchTasks();
//     },
//     [
//       /* fetchTasks */
//     ], // DO NOT SET fetchTasks as a dependency, infinite loop requests
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

/* N°2 */

/* Try not to use React.memo to guaranty that url wont change on re-render, causing
the app to re-render itself infinitely */

// import React, { useEffect, useState, useCallback } from "react";
// import Tasks from "./components/Tasks/Tasks";
// import NewTask from "./components/NewTask/NewTask";
// import useHttp from "./hooks/useHttp";

// const url =
//   "https://react-hooks-academind-7a700-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const tasksTransformer = useCallback((data) => {
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
//   } = useHttp(tasksTransformer);

//   useEffect(() => {
//     fetchTasks({ url });
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

/* N°3: Try to avoid useCallback in App.js */

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
    // Here "transform" task is defined inside the useEffect,
    // thus, avoiding useCallback & dependencies call

    const tasksTransformer = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url }, tasksTransformer);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask taskAddHandler={taskAddHandler} url={url} />
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
