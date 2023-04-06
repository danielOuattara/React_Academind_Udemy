import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <main className={classes.profile}>
          <h2>My User Profile</h2>
        </main>
      )}
    </>
  );
}
