import styles from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./../store";

export default function Auth() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <>
      {!isAuthenticated && (
        <main className={styles.auth}>
          <section>
            <form onSubmit={handleLogin}>
              <div className={styles.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={styles.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              {/* <button type="button" onClick={handleLogin}>Login</button> */}
              <button type="submit">Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
}
