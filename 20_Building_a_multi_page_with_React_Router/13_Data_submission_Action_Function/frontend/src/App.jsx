import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventLayout,
  eventsLoader,
  EventsPage,
  HomePage,
  newEventFormAction,
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
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventFormAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: singleEventLoader,
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
