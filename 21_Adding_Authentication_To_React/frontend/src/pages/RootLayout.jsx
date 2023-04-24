import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenRemainingDuration } from "../utilities";

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const timeout = setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, getTokenRemainingDuration());

    return () => clearTimeout(timeout);
  }, [token, submit]);
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
