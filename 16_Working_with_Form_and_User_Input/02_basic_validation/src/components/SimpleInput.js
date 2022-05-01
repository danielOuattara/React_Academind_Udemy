import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); // method 1
  const nameInputRef = useRef(); // method 2
  const [inputIsValid, setInputIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      return setInputIsValid(false);
    }
    // else
    setInputIsValid(true);
    console.log(enteredName); // method 1 output
    console.log(nameInputRef.current.value); // method 2 output

    setEnteredName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control " ${inputIsValid ? " " : " invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInputRef}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {!inputIsValid && <p className="error-text">Invalid Input for name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
