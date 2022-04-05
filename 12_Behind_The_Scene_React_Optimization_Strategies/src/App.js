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

import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("APP RUNNING");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Toggle Paragraph
      </Button>
      <DemoOutput /> {/* See in console */}
    </div>

    /* It is enough for a function in a child component to be re-evaluate if the
       the parent component is re-evaluated  */
  );
}

export default App;
