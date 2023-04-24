import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import classes from "./EventForm.module.css";
import { getAuthToken } from "../utilities";

export default function EventForm(props) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const navigation = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  const actionResponseData = useActionData();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Form method={props.method} className={classes.form}>
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
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={props.event ? props.event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={props.event ? props.event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={props.event ? props.event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={props.event ? props.event.description : ""}
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

//------------------------------------------------------------

export const addEditEventAction = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const url =
    request.method === "PATCH"
      ? `http://localhost:8080/events/${params.eventId}`
      : `http://localhost:8080/events`;

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getAuthToken(),
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not send event" }, { status: 500 }); // 3})
  }

  // redirect the user after form submission
  return redirect("/events");
};
