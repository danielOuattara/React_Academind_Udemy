import { useState } from "react";
import Output from "./Output";

export default function Greetings() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => setChangedText(true);

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {!changedText && (
        <Output>
          <h1>The infos here are pass to output component</h1>
        </Output>
      )}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>change Text</button>
    </div>
  );
}
