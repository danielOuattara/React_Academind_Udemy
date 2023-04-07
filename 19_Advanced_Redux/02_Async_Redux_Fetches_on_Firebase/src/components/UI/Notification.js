import styles from "./Notification.module.css";

export default function Notification(props) {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = styles.error;
  }
  if (props.status === "success") {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}
