// import React, { useState} from 'react';

// import './App.css';
// import Button from './components/UI/Button/Button';

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   console.log("RENDER")
//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <Button onClick={() => setShowParagraph(!showParagraph)}>Toggle Paragraph</Button>
//       { showParagraph && <p>This is a paragraph</p>}
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------------------

// import React, { useState} from 'react';

// import './App.css';
// import DemoOutput from './components/Demo/DemoOutput';
// import Button from './components/UI/Button/Button';

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//     console.log("APP RUNNING");
//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <Button onClick={() => setShowParagraph(!showParagraph)}>Toggle Paragraph</Button>
//       <DemoOutput show={showParagraph} />
//     </div>
//   );
// }

// export default App;
//-------------------------------------------------------------------

// import React, { useState } from "react";

// import "./App.css";
// import DemoOutput from "./components/Demo/DemoOutput";
// import Button from "./components/UI/Button/Button";

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   console.log("APP RUNNING");

//   /* Every time App is re-eveualted it's recreates all functions
//      and re-evaluate them: see section below for useCallback */

//   // const toggleShowParagraph = () => {
//   //   setShowParagraph((previousSate) => !previousSate);
//   // };

//   function toggleShowParagraph() {
//     setShowParagraph((previousSate) => !previousSate);
//   }

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <DemoOutput show={false} />
//       <Button onClick={toggleShowParagraph}>Toggle Paragraph</Button>
//     </div>
//   );
//   /* It is enough for a function in a child component to be re-evaluate if the
//      the parent component is re-evaluated  */
// }

// export default App;
// -------------------------------------------------------------------

// import React, { useState, useCallback } from "react";

// import "./App.css";
// import DemoOutput from "./components/Demo/DemoOutput";
// import Button from "./components/UI/Button/Button";

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   console.log("APP RUNNING");

//   /* useCallback save a copy a function and makes that function recreated
//      on every re-evaluation */

//   // const toggleShowParagraph = useCallback (() => {
//   //   setShowParagraph((previousSate) => !previousSate);
//   // }, []);

//   const toggleShowParagraph = useCallback(function () {
//     setShowParagraph((previousSate) => !previousSate);
//   }, []);

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <DemoOutput show={false} />
//       <Button onClick={toggleShowParagraph}>Toggle Paragraph</Button>
//     </div>
//   );
//   /* It is enough for a function in a child component to be re-evaluate if the
//      the parent component is re-evaluated  */
// }

// export default App;
// -------------------------------------------------------------------

import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);

  console.log("APP RUNNING");

  /* useCallback save a copy a function and makes that function recreated
     on every re-evaluation */

  // const toggleShowParagraph = useCallback (() => {
  //   setShowParagraph((previousSate) => !previousSate);
  // }, []);

  const toggleShowParagraph = useCallback(function () {
    if (allowToogle) {
      setShowParagraph((previousSate) => !previousSate);
    }
  }, [allowToogle]);

  const allowToggleHandler = () => {
    setAllowToogle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleShowParagraph}>Toggle Paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
  /* It is enough for a function in a child component to be re-evaluate if the
     the parent component is re-evaluated  */
}

export default App;

//-------------------------------------------------------------------
