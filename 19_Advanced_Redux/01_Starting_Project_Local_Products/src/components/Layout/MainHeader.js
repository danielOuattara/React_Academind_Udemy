import CartButton from "../Cart/CartButton";
import styles from "./MainHeader.module.css";

export default function MainHeader(props) {
  return (
    <header className={styles.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
