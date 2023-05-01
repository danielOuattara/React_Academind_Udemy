import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>NewMeetUp</h1>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </>
  );
}
