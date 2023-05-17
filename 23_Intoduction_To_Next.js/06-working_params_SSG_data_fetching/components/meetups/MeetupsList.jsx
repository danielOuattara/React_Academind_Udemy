import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetupsList?.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
