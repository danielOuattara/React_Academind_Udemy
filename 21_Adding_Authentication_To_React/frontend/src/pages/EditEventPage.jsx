import { useRouteLoaderData } from "react-router-dom";
import { EventForm } from "./../components";

export default function EditEventPage() {
  const { singleEvent } = useRouteLoaderData("event-detail");
  console.log("fetchedSingleEvent = ", singleEvent);
  return (
    <>
      <EventForm event={singleEvent} method="patch" />
    </>
  );
}
