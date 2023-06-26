import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  // eventsLoader,
  // singleEventLoader,
  deferEventsLoader,
  deferSingleEventLoader,
  deleteEventAction,
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventLayout,
  EventsPage,
  HomePage,
  NewEventPage,
  newsLetterAction,
  NewsLetterPage,
  RootLayout,
} from "./pages";

import { addEditEventAction } from "./components";

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
          {
            index: true,
            id: "events",
            element: <EventsPage />,
            // loader: eventsLoader,
            loader: deferEventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: addEditEventAction,
          },
          {
            id: "event-detail",
            path: ":eventId",
            // loader: singleEventLoader,
            loader: deferSingleEventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: addEditEventAction,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsLetterPage />,
        action: newsLetterAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
