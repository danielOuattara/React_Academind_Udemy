import { Suspense } from "react";
import { EventItem, EventsList } from "./../components";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

export default function EventDetailPage() {
  const { singleEvent, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ...</p>}>
        <Await resolve={singleEvent}>
          {(fetchedSingleEvent) => <EventItem event={fetchedSingleEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ...</p>}>
        <Await resolve={events}>
          {(fetchedEvents) => <EventsList events={fetchedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

//--------------------------------------------------------------------

export const singleEventLoader = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  const resData = await response.json();
  return resData.event;
};

//---------------------------------------------------------

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  const resData = await response.json();
  return resData.events;
};

//--------------------------------------------------------------------

export const deferSingleEventLoader = async ({ request, params }) => {
  return defer({
    singleEvent: await singleEventLoader(params.eventId),
    events: eventsLoader(),
  });
};

// //---------------------------------------------------------
export const deleteEventAction = async ({ params, request }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
      // headers: { "Content-Type": "application/json" },
    },
  );
  if (!response.ok) {
    console.log("Error");
    return json({ message: "Could not delete event" }, { status: 500 }); // 3
  }
  return redirect("/events");
};
