import { Outlet /* , useNavigation */ } from "react-router-dom";
import { json, redirect } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();
  // console.log("navigation = ", navigation);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <h1>Loading...</h1>} */}
        <Outlet />
      </main>
    </>
  );
}

/*  For testing purpose only: form action can be sent from here */

export const testRootFormAction = async ({ request }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    console.log("ERROR !!!!");
    throw json({ message: "Could not send event" }, { status: 500 }); // 3})
  }

  // redirect the user after form submission
  return redirect("/events");
};
