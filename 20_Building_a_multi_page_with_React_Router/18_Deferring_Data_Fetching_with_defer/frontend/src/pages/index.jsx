import RootLayout from "./RootLayout";
import HomePage from "./HomePage";
import EventsPage, { eventsLoader, deferEventsLoader } from "./EventsPage";
import EventDetailPage from "./EventDetailPage";
import EditEventPage from "./EditEventPage";
import NewEventPage from "./NewEventPage";
import EventLayout from "./EventLayout";
import ErrorPage from "./ErrorPage";
import { singleEventLoader, deleteEventAction } from "./EventDetailPage";
import NewsLetterPage, { newsLetterAction } from "./NewsLetterPage";

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
  deferEventsLoader,
  ErrorPage,
  singleEventLoader,
  deleteEventAction,
  NewsLetterPage,
  newsLetterAction,
};
