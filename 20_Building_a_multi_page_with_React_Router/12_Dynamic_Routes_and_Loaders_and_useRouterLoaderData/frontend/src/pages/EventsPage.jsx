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

/* json() method: to simplify response of loader function

--> in case of error/ data error, use "throw json(...)"
--> in case of success, use "return json(...)"

*/

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
    throw json(
      { message: "Could not fetch events" },
      { status: response.status, statusText: response.statusText },
    ); // 3
  }
  return response;
};
