import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  RootLayout,
  HomePage,
  EventsPage,
  EventDetailPage,
  NewEventPage,
  EditEventPage,
  EventLayout,
  eventsLoader,
  ErrorPage,
  singleEventLoader,
  newEventFormAction,
  deleteEventAction,
  testRootFormAction,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    action: testRootFormAction,
    element: <RootLayout />,
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
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
            loader: singleEventLoader,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
