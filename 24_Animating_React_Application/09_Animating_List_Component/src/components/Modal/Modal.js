// import "./Modal.css";
// import { Transition } from "react-transition-group";

// const animationTiming = {
//   enter: 400,
//   exit: 700,
// };
// const modal = (props) => {
//   return (
//     <Transition
//       mountOnEnter
//       unmountOnExit
//       in={props.show}
//       /* timeout={300} */
//       timeout={animationTiming}
//     >
//       {(state) => {
//         const cssClasses = [
//           "Modal",
//           state === "entering"
//             ? "ModalOpen"
//             : state === "exiting"
//             ? "ModalClosed"
//             : null,
//         ];
//         return (
//           <div className={cssClasses.join(" ")}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//               Dismiss
//             </button>
//           </div>
//         );
//       }}
//     </Transition>
//   );
// };

// export default modal;

//--------------------------------------------------------------------------

// import "./Modal.css";
// import { CSSTransition } from "react-transition-group";

// const animationTiming = {
//   enter: 400,
//   exit: 700,
// };
// const modal = (props) => {
//   return (
//     <CSSTransition
//       mountOnEnter
//       unmountOnExit
//       in={props.show}
//       /* timeout={300} */
//       timeout={animationTiming}
//       classNames="fade-slide"
//     >
//       <div className="Modal">
//         <h1>A Modal</h1>
//         <button className="Button" onClick={props.closed}>
//           Dismiss
//         </button>
//       </div>
//     </CSSTransition>
//   );
// };

// export default modal;

//--------------------------------------------------------------------------

import "./Modal.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 700,
};
const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      /* timeout={300} */
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        appear: "",
        appearActive: "",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
