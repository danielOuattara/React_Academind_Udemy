import { json, redirect } from "react-router-dom";
import { EventForm } from "./../components";

export default function NewEventPage() {
  return <EventForm />;
}

export const newEventFormAction = async ({ request }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: { "Content-Type": "application/json" },
  });

  // send post request
  // if (eventData.description.length < 10) {
  //   return { error: "Description text must be over 10 characters" };
  // }

  if (!response.ok) {
    console.log("ERROR !!!!");
    throw json({ message: "Could not send event" }, { status: 500 }); // 3})
  }

  // redirect the user after form submission
  return redirect("/events");
};
