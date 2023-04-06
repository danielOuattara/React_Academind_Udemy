/* 1: using connect form react-redux using class component
-------------------------------------------------------------- */

// import React, { Component } from "react";
// import classes from "./Counter.module.css";
// import { connect } from "react-redux";

// class Counter extends Component {
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>

//         {this.props.showCounter && (
//           <>
//             <div>
//               <button onClick={this.props.decrementCounter}>Decrement</button>
//               <button onClick={this.props.incrementCounter}>Increment</button>
//             </div>
//           </>
//         )}
//         <button onClick={this.props.toggleCounter}>Toggle Counter</button>
//         <h2>{this.props.showCounter}</h2>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter, showCounter: state.showCounter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCounter: () => {
//       dispatch({
//         type: "TOGGLE_COUNTER_VIEW",
//       });
//     },
//     decrementCounter: () => {
//       dispatch({
//         type: "DECREMENT",
//         payload: -1,
//       });
//     },

//     incrementCounter: () => {
//       dispatch({
//         type: "INCREMENT",
//         payload: +1,
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//----------------------------------------------------------------------------------------------

/* 2: using useSelector, useDispatch form react-redux using functional component
------------------------------------------------------------------------------- */

// import classes from "./Counter.module.css";
// import { useSelector, useDispatch } from "react-redux";

// export default function Counter() {
//   const counter = useSelector((state) => state.counter);
//   const showCounter = useSelector((state) => state.showCounter);
//   const dispatch = useDispatch();

//   const incrementCounter = () => {
//     dispatch({ type: "INCREMENT", payload: +1 });
//   };
//   const decrementCounter = () => {
//     dispatch({ type: "DECREMENT", payload: -1 });
//   };
//   const toggleCounter = () => {
//     dispatch({ type: "TOGGLE_COUNTER_VIEW" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounter && (
//         <>
//           <div className={classes.value}>{counter}</div>
//           <div>
//             <button onClick={decrementCounter}>Decrement</button>
//             <button onClick={incrementCounter}>Increment</button>
//           </div>
//         </>
//       )}
//       <button onClick={toggleCounter}>Toggle Counter</button>
//       <h2>{showCounter}</h2>
//     </main>
//   );
// }

//----------------------------------------------------------------------------------------------

// /* 3:  using connect form react-redux using class component
// ----------------------------------------------------------- */

// import React, { Component } from "react";
// import classes from "./Counter.module.css";
// import { connect } from "react-redux";

// export class Counter extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         {this.props.showCounter && (
//           <>
//             <div>
//               <button onClick={this.props.decrementCounter}>Decrement</button>
//               <button onClick={this.props.incrementCounter}>Increment</button>
//             </div>
//           </>
//         )}
//         <div></div>
//         <button onClick={this.props.toggleCounter}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter, showCounter: state.showCounter };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => {
//       dispatch({ type: "INCREMENT", payload: +1 });
//     },
//     decrementCounter: () => {
//       dispatch({ type: "DECREMENT", payload: -1 });
//     },
//     toggleCounter: () => {
//       dispatch({ type: "TOGGLE_COUNTER_VIEW" });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//----------------------------------------------------------------------------------------------

/* 4: using useSelector, useDispatch form react-redux using 
functional component, continuing the project
----------------------------------------------------------- */
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT", payload: +1 });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "INCREMENT", payload: +5 });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT", payload: -1 });
  };
  const toggleCounter = () => {
    dispatch({ type: "TOGGLE_COUNTER_VIEW" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={incrementBy5Handler}>Increment By 5</button>
          </div>
        </>
      )}

      <button onClick={toggleCounter}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
    </main>
  );
};

export default Counter;
