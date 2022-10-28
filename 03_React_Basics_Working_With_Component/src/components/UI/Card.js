import "./../UI/card.css";

function Card(props) {
  const classes = `card + ${props.className}`;
  //   console.log("props = ", props);
  //   console.log("props.className = ", props.className);
  return <div className={classes}>{props.children}</div>;
}

export default Card;
