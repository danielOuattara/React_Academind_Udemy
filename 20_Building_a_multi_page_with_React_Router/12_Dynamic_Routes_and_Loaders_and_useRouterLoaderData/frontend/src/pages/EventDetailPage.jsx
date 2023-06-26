// import { EventItem } from "./../components";
// import { useLoaderData, json } from "react-router-dom";

// export default function EventDetailPage() {
//   const fetchedSingleEvent = useLoaderData();
//   return <EventItem event={fetchedSingleEvent.event} />;
// }

// export const singleEventLoader = async ({ params }) => {
//   const response = await fetch(
//     `http://localhost:8080/events/${params.eventId}`,
//   );
//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch selected event" },
//       { status: response.status, statusText: response.statusText },
//     );
//   }
//   return response;
// };

//----------------------------------------------------------------

import { EventItem } from "./../components";
import { useRouteLoaderData, json } from "react-router-dom";

export default function EventDetailPage() {
  const fetchedSingleEvent = useRouteLoaderData("event-detail"); // Here the diff from previous commented
  return <EventItem event={fetchedSingleEvent.event} />;
}

export const singleEventLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch selected event" },
      { status: response.status, statusText: response.statusText },
    );
  }
  return response;
};
