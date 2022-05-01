import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); // method 1
  const nameInputRef = useRef(); // method 2

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredName); // method 1 output
    console.log(nameInputRef.current.value); // method 2 output

    setEnteredName("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
