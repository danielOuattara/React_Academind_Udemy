// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   EditEventPage,
//   ErrorPage,
//   EventDetailPage,
//   EventLayout,
//   eventsLoader,
//   EventsPage,
//   HomePage,
//   NewEventPage,
//   RootLayout,
//   singleEventLoader,
// } from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventLayout />,
//         children: [
//           { index: true, element: <EventsPage />, loader: eventsLoader },
//           { path: "new", element: <NewEventPage /> },
//           {
//             path: ":eventId",
//             element: <EventDetailPage />,
//             loader: singleEventLoader,
//           },
//           { path: ":eventId/edit", element: <EditEventPage /> },
//         ],
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

//---------------------------------------------------------------------------------
/* 

formatting route with ":eventId" 
ready to use useRouteLoaderData 

Goal: EventDetailPage & EventForm must make the same request
to get detail about the same event.

So, to avoid making 2 functions loader for the same goal,
we join their path on a same root path and call 

NEW : id: "event-detail",
 
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventLayout,
  eventsLoader,
  EventsPage,
  HomePage,
  NewEventPage,
  RootLayout,
  singleEventLoader,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: "new", element: <NewEventPage /> },
          {
            path: ":eventId",
            id: "event-detail",
            loader: singleEventLoader, // shared loader between <EventDetailPage/> & <EditEventPage/>
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
