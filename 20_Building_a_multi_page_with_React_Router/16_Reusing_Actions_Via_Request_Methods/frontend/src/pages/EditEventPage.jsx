import { useRouteLoaderData } from "react-router-dom";
import { EventForm } from "./../components";

export default function EditEventPage() {
  const fetchedSingleEvent = useRouteLoaderData("event-detail");
  return (
    <>
      <EventForm event={fetchedSingleEvent.event} method="patch" />
    </>
  );
}
