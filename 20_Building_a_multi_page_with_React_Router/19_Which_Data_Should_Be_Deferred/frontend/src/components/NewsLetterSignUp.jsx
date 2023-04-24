import { useFetcher } from "react-router-dom";
import classes from "./NewsLetterSignUp.module.css";
import { useEffect } from "react";

export default function NewsLetterSignUp() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  // console.log("fetcher = ", fetcher);

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}
