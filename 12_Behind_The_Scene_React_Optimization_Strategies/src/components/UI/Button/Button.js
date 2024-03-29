// import React from "react";
// import classes from "./Button.module.css";

// const Button = (props) => {
//   console.log("BUTTON RUNNING");
//   return (
//     <button
//       type={props.type || "button"}
//       className={`${classes.button} ${props.className}`}
//       onClick={props.onClick}
//       disabled={props.disabled}
//     >
//       {props.children}
//     </button>
//   );
// };

// export default Button;

//-------------------------------------------------------

import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  console.log("BUTTON RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

/* 
React.memo does not work on Button function; 
must add useCallback + React.memo
CAUTION: React.memo + useCallback, */
