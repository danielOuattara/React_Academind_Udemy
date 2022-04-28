// import React from "react";
// import MyParagraph from "./MyParagraph";

// function DemoOutput(props) {
//   console.log("DEMO OUTPUT RUNNING");
//   return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
// }

// export default DemoOutput;


//------------------------------------------------------------------------

import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log("DEMO OUTPUT RUNNING");
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
}

export default React.memo(DemoOutput);
/* React.memo() for functionnal components only  */