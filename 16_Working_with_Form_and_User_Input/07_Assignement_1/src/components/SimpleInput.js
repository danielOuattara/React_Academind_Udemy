import { useState } from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const inputNameIsValid = enteredName.trim() !== "";

  const regex = /\S+@\S+\.\S+/;
  const inputEmailIsValid = regex.test(enteredEmail.trim());

  let formIsValid = false;

  if (inputNameIsValid && inputEmailIsValid) {
    formIsValid = true;
  }

  // name
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameInputTouched(true);
  };

  // email
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailInputTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputNameIsValid || !inputEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredEmail("");
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`form-control ${
          !inputNameIsValid && nameInputTouched ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!inputNameIsValid && nameInputTouched && (
          <p className="error-text">Invalid Input for name</p>
        )}
      </div>

      <div
        className={`form-control ${
          !inputEmailIsValid && emailInputTouched ? "invalid" : ""
        }`}
      >
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {!inputEmailIsValid && emailInputTouched && (
          <p className="error-text">Invalid Input for email</p>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
}
