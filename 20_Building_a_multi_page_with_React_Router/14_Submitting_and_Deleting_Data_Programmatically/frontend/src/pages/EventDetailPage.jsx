import { EventItem } from "./../components";
import { useRouteLoaderData, json, redirect } from "react-router-dom";

export default function EventDetailPage() {
  const fetchedSingleEvent = useRouteLoaderData("event-detail");
  return <EventItem event={fetchedSingleEvent.event} />;
}

export const singleEventLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
  );
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  return response.json();
};

//---------------------------------------------------------
export const deleteEventAction = async ({ params, request }) => {
  console.log("request = ", request);
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
      // headers: { "Content-Type": "application/json" },
    },
  );

  console.log("response = ", response);

  if (!response.ok) {
    console.log("Error");
    return json({ message: "Could not delete event" }, { status: 500 }); // 3
  }
  return redirect("/events");
};
