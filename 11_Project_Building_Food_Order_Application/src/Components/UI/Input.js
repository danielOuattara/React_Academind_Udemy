import React from "react";
import styles from "./Input.module.css";

// const Input = React.forwardRef((props, ref) => {
//   return (
//     <div className={styles.input}>
//       <label htmlFor={props.inputParams.id}>{props.label}</label>
//       <input ref={ref} {...props.inputParams} />
//     </div>
//   );
// })

// export default Input;

//--------------------------------------------------------------------------

const Input = React.forwardRef(function(props, ref) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.inputParams.id}>{props.label}</label>
      <input ref={ref} {...props.inputParams} />
    </div>
  );
})

export default Input;


