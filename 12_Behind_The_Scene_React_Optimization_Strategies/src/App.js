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
//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <Button onClick={() => setShowParagraph(!showParagraph)}>
//         Toggle Paragraph
//       </Button>
//       <DemoOutput /> {/* See in console */}
//     </div>

//     /* It is enough for a function in a child component to be re-evaluate if the
//        the parent component is re-evaluated  */
//   );
// }

// export default App;

//-------------------------------------------------------------------

import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false)

  console.log("APP RUNNING");

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  const toggleParagraph = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((showParagraph) => !showParagraph);
    }
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* This is not sensible to useCallback() */}
      {<Button onClick={() => toggleParagraph()}>Toggle Paragraph</Button>}

      {/* This is working on useCallback */}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
      <DemoOutput /> {/* See in console */}
    </div>

    /* It is enough for a function in a child component to be re-evaluate if the
       the parent component is re-evaluated  */
  );

/*
useCallback is a React hook. Used on callback functions.
It will return a memoized version of the callback that 
change only if one of callback's dependencies changes

Useful for unnecessary renders of callback passed in components
from a parent component 
*/
}

export default App;
