import RootLayout from "./RootLayout";
import HomePage from "./HomePage";
import EventsPage, { eventsLoader, deferEventsLoader } from "./EventsPage";
import EventDetailPage, {
  deleteEventAction,
  deferSingleEventLoader,
  singleEventLoader,
} from "./EventDetailPage";
import EditEventPage from "./EditEventPage";
import NewEventPage from "./NewEventPage";
import EventLayout from "./EventLayout";
import ErrorPage from "./ErrorPage";
import NewsLetterPage, { newsLetterAction } from "./NewsLetterPage";
import AuthenticationPage, { authAction } from "./AuthenticationPage";
import { logoutAction } from "./Logout";

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
  deferSingleEventLoader,
  NewsLetterPage,
  newsLetterAction,
  AuthenticationPage,
  authAction,
  logoutAction,
};
