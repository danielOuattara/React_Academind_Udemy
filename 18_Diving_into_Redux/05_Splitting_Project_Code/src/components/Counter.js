/* 4: using Redux toolkit
------------------------- */

import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./../store/counter-slice";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.incrementByOne());
  };
  const incrementBy5Handler = () => {
    dispatch(counterActions.increment(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(-1));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementBy5Handler}>Increment By 5</button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
    </main>
  );
}
