import EventsList from "../components/EventsList";

const eventData = [
  { id: "event-1", title: "Event 1" },
  { id: "event-2", title: "Event 2" },
  { id: "event-3", title: "Event 3" },
  { id: "event-4", title: "Event 4" },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={eventData} />
    </>
  );
}
