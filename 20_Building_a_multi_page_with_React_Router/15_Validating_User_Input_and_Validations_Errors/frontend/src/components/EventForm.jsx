import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const navigation = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  const actionResponseData = useActionData();
  console.log("actionResponseData = ", actionResponseData);

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Form method="post" className={classes.form}>
      {actionResponseData && actionResponseData.errors && (
        <ul>
          {Object.values(actionResponseData.errors).map((errorItem) => (
            <li style={{ color: "red" }} key={errorItem}>
              {errorItem}
            </li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">
          Title
          {actionResponseData?.errors?.title && (
            <span style={{ color: "red" }}>
              {" "}
              {actionResponseData?.errors?.title}
            </span>
          )}
        </label>
        <input
          style={
            actionResponseData?.errors?.title
              ? { border: "3px solid red" }
              : { border: "" }
          }
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          // required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting ..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
