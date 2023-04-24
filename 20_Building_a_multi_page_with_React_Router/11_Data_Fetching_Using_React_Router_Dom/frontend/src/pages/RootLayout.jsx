import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  const navigation = useNavigation();

  // console.log("navigation = ", navigation);
  // console.log("navigation.state = ", navigation.state); // --> "idle", "loading", "submitting"

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <h1>Loading...</h1>}
        {navigation.state === "idle" && <Outlet />}
      </main>
    </>
  );
}
