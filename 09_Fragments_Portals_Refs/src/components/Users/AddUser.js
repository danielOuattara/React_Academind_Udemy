// import { useState } from "react";
// import Card from "../UI/Card";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";
// import classes from "./AddUser.module.css";
// import Wrapper from "../Helpers/Wrapper";

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   const [error, setError] = useState(null);

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid input",
//         message: "Please enter a valid name and age (non-empty values).",
//       });
//       return;
//     }
//     if (+enteredAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter a valid age (> 0).",
//       });
//       return;
//     }
//     props.onAddUser(enteredUsername, enteredAge);
//     setEnteredUsername("");
//     setEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <Wrapper>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>

//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredAge}
//             onChange={ageChangeHandler}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// };

// export default AddUser;

//

//---------------------------- Using ref below

import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);

    // useRef then make useState non useful: see all commented

    // but problem: A component is changing an uncontrolled input
    // to be controlled (Seen in console)
    const userNameInput = nameInputRef.current.value;
    const userAgeInput = ageInputRef.current.value;

    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAgeInput < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userNameInput, userAgeInput);
    // allows to clear the inputs fields,
    // But Avoid !!! Do Not Manipuate The DOM, it's The Job Of ReactDOM
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>

          <input
            // Because of ref... this input became an uncontrolled input element
            id="username"
            type="text"
            value={nameInputRef.current.value}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            // Because of ref... this input became an uncontrolled input element
            id="age"
            type="number"
            value={ageInputRef.current.value}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
