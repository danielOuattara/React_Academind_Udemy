import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandler = (data) => {};
  return (
    <>
      <h1>NewMeetUp</h1>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </>
  );
}
