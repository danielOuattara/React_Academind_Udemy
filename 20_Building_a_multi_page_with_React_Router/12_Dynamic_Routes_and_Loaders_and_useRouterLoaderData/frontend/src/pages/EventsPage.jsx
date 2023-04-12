// import EventsList from "../components/EventsList";

// const eventData = [
//   { id: "event-1", title: "Event 1" },
//   { id: "event-2", title: "Event 2" },
//   { id: "event-3", title: "Event 3" },
//   { id: "event-4", title: "Event 4" },
// ];

// export default function EventsPage() {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <EventsList events={eventData} />
//     </>
//   );
// }

//----------------------------------------------------------------------------

/*  useEffect & useState to fetch and store events for use 
------------------------------------------------------------*/

// import { useEffect, useState } from "react";
// import EventsList from "../components/EventsList";

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       const response = await fetch("http://localhost:8080/events");

//       if (!response.ok) {
//         setIsLoading(false);
//         setError("Fetching events failed.");
//       } else {
//         const resData = await response.json();
//         console.log("resData = ", resData);
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }

// export default EventsPage;

//-------------------------------------------------------------------------------

// import EventsList from "../components/EventsList";
// import { useLoaderData } from "react-router-dom";

// export default function EventsPage() {
//   const fetchedEvents = useLoaderData();

//   // if (fetchedEvents.isError) {
//   //   return <p>{fetchedEvents.message}</p>;
//   // }

//   return (
//     <>
//       <EventsList events={fetchedEvents.events} />
//     </>
//   );
// }

// export const eventsLoader = async () => {
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     // return { isError: true, message: "Could not fetch events" };  // 1
//     // throw new Error("Could not fetch events");  // 2
//     throw new Response(JSON.stringify({ message: response.statusText }), {
//       status: response.status,
//     }); // 3
//   }
//   return response;
// };

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

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 }); // 3
  }
  return response;
};
