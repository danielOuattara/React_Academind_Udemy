import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

export default function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ...</p>}>
      <Await resolve={events}>
        {(fetchedEvents) => <EventsList events={fetchedEvents.events} />}
      </Await>
    </Suspense>
  );
}

//----------------------------------------------------
export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  const resData = await response.json();
  return resData;
};

//----------------------------------------------------
export const deferEventsLoader = () => {
  return defer({ events: eventsLoader() });
};
