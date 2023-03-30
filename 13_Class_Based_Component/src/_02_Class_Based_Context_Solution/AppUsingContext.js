import UserFinder from "./components/UserFInder";
import UserContextProvider from "./context/UserContext";

function AppUsingContext() {
  return (
    <UserContextProvider>
      <UserFinder />
    </UserContextProvider>
  );
}

export default AppUsingContext;
