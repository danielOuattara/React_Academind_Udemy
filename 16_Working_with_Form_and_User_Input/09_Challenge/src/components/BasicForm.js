import useInput from "./../hooks/useInput";

const validateNameItem = (nameItem) => {
  return nameItem.trim() !== "";
};

const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email.trim());
};

export default function BasicForm(props) {
  const {
    inputValue: enteredFirstName,
    setInputValue: setEnteredFirstName,
    inputFieldTouched: firstNameInputTouched,
    setInputFieldTouched: setFirstNameInputTouched,
    inputHasError: inputFirstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputFieldBlurHandler: firstNameInputBlurHandler,
  } = useInput(validateNameItem);

  const {
    inputValue: enteredLastName,
    setInputValue: setEnteredLastName,
    inputFieldTouched: lastNameInputTouched,
    setInputFieldTouched: setLastNameInputTouched,
    inputHasError: inputLastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputFieldBlurHandler: lastNameInputBlurHandler,
  } = useInput(validateNameItem);

  const {
    inputValue: enteredEmail,
    setInputValue: setEnteredEmail,
    inputFieldTouched: emailInputTouched,
    setInputFieldTouched: setEmailInputTouched,
    inputHasError: inputEmailHasError,
    inputChangeHandler: emailChangeHandler,
    inputFieldBlurHandler: emailInputBlurHandler,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (
    !inputFirstNameHasError &&
    !inputLastNameHasError &&
    !inputEmailHasError
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return 0;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");

    setFirstNameInputTouched(false);
    setLastNameInputTouched(false);
    setEmailInputTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div
          className={`form-control ${
            inputFirstNameHasError && firstNameInputTouched ? "invalid" : ""
          }`}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {inputFirstNameHasError && firstNameInputTouched && (
            <p className="error-text">Invalid Input for first name</p>
          )}
        </div>

        <div
          className={`form-control ${
            inputLastNameHasError && lastNameInputTouched ? "invalid" : ""
          }`}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {inputLastNameHasError && lastNameInputTouched && (
            <p className="error-text">Invalid Input for first name</p>
          )}
        </div>

        <div
          className={`form-control ${
            inputEmailHasError && emailInputTouched ? "invalid" : ""
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
          {inputEmailHasError && emailInputTouched && (
            <p className="error-text">Invalid Input for email</p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
