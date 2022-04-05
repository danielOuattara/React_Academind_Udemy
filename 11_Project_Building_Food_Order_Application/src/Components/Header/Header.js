import React from "react";
import styles from "./Header.module.css";
import mealImage from "./../../assets/meals.jpg";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
      </div>
      <div className={styles["main-image"]}>
        <img src={mealImage} className={styles.img} alt="meals" />
      </div>
    </>
  );
}

export default Header;
