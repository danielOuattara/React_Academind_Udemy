// import React, { useState } from 'react';

// import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = event => {
//     if(event.target.value.length > 3) {
//       setIsValid(true)
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     if(enteredValue.trim().length < 3) {
//       setIsValid(false)
//       return 0;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       < div className={`form-control ${!isValid ? 'invalid-input': ''} `}>
//         <label>Course Goal</label>
//         <input
//           type="text"
//           onChange={goalInputChangeHandler}
//         />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;
//
//

// /* STYLED COMPONENT */
// //-----------------------------------------------------------------------
// import React, { useState } from "react";
// import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props["invalid-input"] ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props["invalid-input"] ? "red" : "#ccc")};
//     background: ${(props) =>
//       props["invalid-input"] ? "lightSalmon" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid-input input {
//     border-color: red;
//     background-color: lightSalmon;
//   }

//   &.invalid-input label {
//     color: red;
//   }
// `;

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     if (event.target.value.length > 3) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length < 3) {
//       setIsValid(false);
//       return 0;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     // <form onSubmit={formSubmitHandler}>
//     //   < FormControl className={!isValid && 'invalid-input'}>
//     //     <label>Course Goal</label>
//     //     <input
//     //       type="text"
//     //       onChange={goalInputChangeHandler}
//     //     />
//     //   </FormControl>
//     //   <Button type="submit">Add Goal</Button>
//     // </form>

//     //-----------------------------------------------------------
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invalid-input={!isValid}>
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;
//
//-----------------------------------------------------------------------
//
/* CSS.MODULE  */

import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 3) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length < 3) {
      return setIsValid(false);
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(() => "");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValid && styles["invalid-input"]
        } `}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
