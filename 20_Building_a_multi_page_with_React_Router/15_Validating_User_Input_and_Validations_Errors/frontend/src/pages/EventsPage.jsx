//-------------------------------------------------------------------------------
// json() method
//
import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

export default function EventsPage() {
  const fetchedEvents = useLoaderData();

  return (
    <>
      <EventsList events={fetchedEvents.events} />
    </>
  );
}

//----------------------------------------------------
export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  return response;
};

//----------------------------------------------------
