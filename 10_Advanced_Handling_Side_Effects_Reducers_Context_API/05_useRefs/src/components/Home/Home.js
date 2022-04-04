import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const { onLogout } = useContext(AuthContext);
  console.log(useContext(AuthContext))
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
