import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    try {
      const response = await fetch(`/api/new-meetup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(`${response.status} ${response.statusText}`);
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const dataResponse = await response.json();
      console.log("dataResponse = ", dataResponse);
      // router.push("/");
      //
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="add your own meetups to your application"
        />
      </Head>
      <h1>NewMeetUp</h1>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </>
  );
}
