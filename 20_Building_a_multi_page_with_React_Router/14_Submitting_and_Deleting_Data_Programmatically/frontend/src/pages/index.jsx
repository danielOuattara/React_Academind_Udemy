import RootLayout, { testRootFormAction } from "./RootLayout";
import HomePage from "./HomePage";
import EventsPage from "./EventsPage";
import EventDetailPage from "./EventDetailPage";
import EditEventPage from "./EditEventPage";
import NewEventPage from "./NewEventPage";
import EventLayout from "./EventLayout";
import { eventsLoader } from "./EventsPage";
import ErrorPage from "./ErrorPage";
import { singleEventLoader, deleteEventAction } from "./EventDetailPage";
import { newEventFormAction } from "./NewEventPage";

//--------------------------------
export {
  RootLayout,
  HomePage,
  EventsPage,
  EventDetailPage,
  EditEventPage,
  NewEventPage,
  EventLayout,
  eventsLoader,
  ErrorPage,
  singleEventLoader,
  newEventFormAction,
  deleteEventAction,
  testRootFormAction,
};
