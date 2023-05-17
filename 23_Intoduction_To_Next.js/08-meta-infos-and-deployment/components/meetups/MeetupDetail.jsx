import { useRouter } from "next/router";
import classes from "./MeetupItem.module.css";
import styles from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  const router = useRouter();
  return (
    <>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>
        {/* <Link href={`/${props.id}`}>Show Details</Link> */}
        <button onClick={() => router.push("/")}>Back to Home</button>
      </div>
    </>
  );
}
