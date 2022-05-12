import classes from "./UserProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./../store";

const UserProfile = () => {
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
};

export default UserProfile;
