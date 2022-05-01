import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = enteredName.trim() !== "";

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
