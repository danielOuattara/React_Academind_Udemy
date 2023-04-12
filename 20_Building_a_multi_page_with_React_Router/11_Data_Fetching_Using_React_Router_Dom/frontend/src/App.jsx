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
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
