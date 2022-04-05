import React from "react";

function DemoOutput(props) {
  console.log("DEMO OUTPUT RUNNING");
  return <p>{props.show ? "This is a paragraph" : ""}</p>;
}

export default React.memo(DemoOutput);
/* React.memo() for functionnal components only  */