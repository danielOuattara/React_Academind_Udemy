
import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); // method 1
  const nameInputRef = useRef(); // method 2
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  useEffect(() => {
    if (inputIsValid) {
      console.log("Name Input is Valid");
    }
  }, [inputIsValid]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInputTouched(true)

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
      <div className={`form-control " ${!inputIsValid && inputTouched ? "invalid":""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInputRef}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {!inputIsValid && inputTouched && <p className="error-text">Invalid Input for name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
