// import { useState, useEffect } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState(""); // method 1
//   // const [inputIsValid, setInputIsValid] = useState(false);
//   const [inputTouched, setInputTouched] = useState(false);
//   const [formIsValid, setFormIsValid] = useState(false);

//   const inputIsValid = enteredName.trim() !== "";

//   useEffect(() => {
//     if (inputIsValid) {
//       setFormIsValid(true);
//     } else {
//       setFormIsValid(false);
//     }
//   }, [inputIsValid]);

//   const nameChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const inputBlurHandler = (event) => {
//     setInputTouched(true);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setInputTouched(true);
//     if (!inputIsValid) {
//       return;
//     }
//     setEnteredName("");
//     setInputTouched(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div
//         className={`form-control " ${
//           !inputIsValid && inputTouched ? "invalid" : ""
//         }`}
//       >
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={nameChangeHandler}
//           onBlur={inputBlurHandler}
//           value={enteredName}
//         />
//         {!inputIsValid && inputTouched && (
//           <p className="error-text">Invalid Input for name</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button type="submit" disabled={!formIsValid}>
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

//-------------------------------------------------------------------

import { useState /* , useEffect */ } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); // method 1
  // const [inputIsValid, setInputIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const inputIsValid = enteredName.trim() !== "";
  let formIsValid = false;

  if (inputIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (inputIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [inputIsValid]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("done");
    console.log(enteredName);
    setInputTouched(true);
    if (!inputIsValid) {
      return;
    }
    setEnteredName("");
    setInputTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`form-control " ${
          !inputIsValid && inputTouched ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {!inputIsValid && inputTouched && (
          <p className="error-text">Invalid Input for name</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;

// //-------------------------------------------------------------------
