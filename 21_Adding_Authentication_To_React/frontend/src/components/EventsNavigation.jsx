import { NavLink, useRouteLoaderData } from "react-router-dom";
import styles from "./EventsNavigation.module.css";

function EventsNavigation() {
  const authToken = useRouteLoaderData("rootLayout");
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              All Events
            </NavLink>
          </li>
          {authToken && (
            <li>
              <NavLink
                to="new"
                className={({ isActive }) => (isActive ? styles.active : null)}
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
