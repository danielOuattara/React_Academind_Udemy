import React from "react";
import styles from "./Header.module.css";
import mealsImage from "./../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} className={styles.img} alt="table of meals" />
      </div>
    </React.Fragment>
  );
}

export default Header;
