import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styles from "./RouteLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
