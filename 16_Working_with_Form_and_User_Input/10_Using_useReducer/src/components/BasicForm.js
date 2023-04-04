// My solution

import useInput from "./../hooks/useInput";

const validateNameItem = (arg) => arg.trim() !== "";
const validateEmail = (arg) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(arg.trim());
};

export default function BasicForm(props) {
  const {
    inputValue: firstName,
    inputChangeHandler: firstNameChangeHandler,
    inputHasError: inputFirstNameHasError,
    inputFieldBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput(validateNameItem);

  const {
    inputValue: lastName,
    inputChangeHandler: lastNameChangeHandler,
    inputHasError: inputLastNameHasError,
    inputFieldBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput(validateNameItem);

  const {
    inputValue: email,
    inputChangeHandler: emailChangeHandler,
    inputHasError: inputEmailHasError,
    inputFieldBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
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

    console.log(firstName, lastName, email);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div
          className={`form-control ${inputFirstNameHasError ? "invalid" : ""}`}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={firstName}
          />
          {inputFirstNameHasError && (
            <p className="error-text">Invalid Input for first name</p>
          )}
        </div>

        <div
          className={`form-control ${inputLastNameHasError ? "invalid" : ""}`}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastName}
          />
          {inputLastNameHasError && (
            <p className="error-text">Invalid Input for first name</p>
          )}
        </div>

        <div className={`form-control ${inputEmailHasError ? "invalid" : ""}`}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={email}
          />
          {inputEmailHasError && (
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
