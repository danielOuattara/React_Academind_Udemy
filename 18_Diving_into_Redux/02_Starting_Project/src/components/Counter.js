/* 1: using connect form react-redux using functionnal component
-------------------------------------------------------------- */

// import classes from "./Counter.module.css";
// import { connect } from "react-redux";

// const Counter = (props) => {
// console.log(props)

//   const toggleCounterHandler = () => {
//     props.increment();
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{props.counter}</div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({
//         type: "INCREMENT",
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/* 2: using useSelctor, useDispatch form react-redux using functionnal component
------------------------------------------------------------------------------- */
// import classes from "./Counter.module.css";
// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "DECREMENT" });
//   };
//   const toggleCounterHandler = () => {
//     dispatch({ });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={decrementHandler}>Decrement</button>
//         <button onClick={incrementHandler}>Increment</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// /* 3:  using connect form react-redux using class component
// ----------------------------------------------------------- */

// import React, { Component } from "react";
// import classes from "./Counter.module.css";
// import { connect } from "react-redux";

// export class Counter extends Component {
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.props.decrementHandler}>Decrement</button>
//           <button onClick={this.props.incrementHandler}>Increment</button>
//         </div>
//         <button onClick={this.props.toggleCounterHandler}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementHandler: () => {
//       dispatch({ type: "INCREMENT" });
//     },
//     decrementHandler: () => {
//       dispatch({ type: "DECREMENT" });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/* 4: using useSelctor, useDispatch form react-redux using 
functionnal component, continuing the project
----------------------------------------------------------- */
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", payload: +1 });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "INCREMENT", payload: +5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", payload: -1 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE_COUNTER_VIEW" });
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
};

export default Counter;
