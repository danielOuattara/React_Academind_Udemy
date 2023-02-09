import React from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [active, setActive] = React.useState(false);
  const handleClick = () => setActive((active) => !active);

  return (
    <div>
      <p className={active ? "active" : ""}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
