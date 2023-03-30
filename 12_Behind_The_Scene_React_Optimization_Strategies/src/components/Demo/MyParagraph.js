import React from "react";

function MyParagraph(props) {
  console.log("MY PARAGRAPH RUNNING");
  return <p>{props.children}</p>;
}

export default MyParagraph;

//-------------------------------------------------------------

// import React from "react";

// function MyParagraph(props) {
//   console.log("MY PARAGRAPH RUNNING");
//   return <p>{props.children}</p>;
// }

// export default React.memo(MyParagraph);
// /* React.memo() for functional components only  */
