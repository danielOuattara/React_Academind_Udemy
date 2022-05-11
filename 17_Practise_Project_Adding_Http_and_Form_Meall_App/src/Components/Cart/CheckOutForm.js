import styles from "./CheckOutForm.module.css";
import { useRef, useState } from "react";

// 4 create helper validity function
const isEmpty = (value) => value.trim() === "";
const isFiveNumbers = (value) => value.trim().length === 5;
const isNotNumber = (value) => isNaN(value.trim());

const regex = /^[^@]+@[^@]+\.[^@]+$/;
const isEmail = (value) => regex.test(value);

function CheckOutForm(props) {
  // 7 create state to handle formInputValidity, initialize them all to true
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
    phone: true,
    email: true,
  });

  // 1: create ref
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    // 3 gather each input value
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    // 5 create validity boolean variable for each input
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid =
      !isEmpty(enteredPostal) &&
      !isNotNumber(enteredPostal) &&
      isFiveNumbers(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPhoneIsValid =
      !isEmpty(enteredPhone) && !isNotNumber(enteredPhone);
    const enteredEmailIsValid = !isEmpty(enteredEmail) && isEmail(enteredEmail);

    // 8 update the formInputValidity state
    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
      phone: enteredPhoneIsValid,
      email: enteredEmailIsValid,
    });

    // 6 define the boolean for the form is valid
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid &&
      enteredPhoneIsValid &&
      enteredEmailIsValid;

    if (!formIsValid) {
      return;
    }

    props.handleUserConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
      phone: enteredPhone,
      email: enteredEmail,
    })
  };

  return (
    <form onSubmit={submitForm}>
      {/* 9 use the formInputValidity on each input to check for its validity and return error if not valid*/}
      <div
        className={`${styles.control} ${
          formInputValidity.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        {!formInputValidity.name && (
          <p className={styles.invalid}>Please enter a valid name</p>
        )}
        {/* 2 : associate refs to each input */}
        <input type="text" id="name" name="name" ref={nameInputRef} />
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.street ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        {!formInputValidity.street && (
          <p className={styles.invalid}>Please enter a valid street</p>
        )}
        <input type="text" id="street" name="street" ref={streetInputRef} />
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.postal ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        {!formInputValidity.postal && <p>Please enter a valid postal</p>}
        <input type="text" id="postal" name="postal" ref={postalInputRef} />
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        {!formInputValidity.city && <p>Please enter a valid city</p>}
        <input type="text" id="city" name="city" ref={cityInputRef} />
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.phone ? "" : styles.invalid
        }`}
      >
        <label htmlFor="phone">Phone</label>
        {!formInputValidity.phone && <p>Please enter a valid phone</p>}
        <input type="text" id="phone" name="phone" ref={phoneInputRef} />
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.email ? "" : styles.invalid
        }`}
      >
        <label htmlFor="email">Email</label>
        {!formInputValidity.email && <p>Please enter a valid email</p>}
        <input type="email" id="email" name="email" ref={emailInputRef} />
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onCancelOrder}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default CheckOutForm;
