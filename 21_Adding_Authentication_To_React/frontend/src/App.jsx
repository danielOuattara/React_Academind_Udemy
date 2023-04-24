import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  RootLayout,
  HomePage,
  EventsPage,
  EventDetailPage,
  NewEventPage,
  EditEventPage,
  EventLayout,
  // eventsLoader,
  deferEventsLoader,
  ErrorPage,
  // singleEventLoader,
  deleteEventAction,
  NewsLetterPage,
  newsLetterAction,
  deferSingleEventLoader,
  AuthenticationPage,
  authAction,
  logoutAction,
} from "./pages";

import { addEditEventAction } from "./components";
import { tokenLoader, tokenRouteProtectedLoader } from "./utilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    id: "rootLayout",
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
            loader: tokenRouteProtectedLoader,
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
                loader: tokenRouteProtectedLoader,
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
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
