import React from "react";

// don't change the Component name "App"
export default function App() {
  const [clicked, setClicked] = React.useState(false);
  // const [countClick, setCountClick] = React.useState(0);

  const handleClick0 = () => setClicked((clicked) => !clicked);

  const handleClick = () => {
    if (clicked === false) {
      return setClicked(true);
    }
    return setClicked(() => false);
  };

  return (
    <div>
      <p style={{ color: clicked ? "red" : "white" }}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
