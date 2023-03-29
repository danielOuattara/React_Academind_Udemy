import ReactDOM from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";

//-------------------------------------
function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideCartHandler}></div>
  );
}

//-------------------------------------
function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

//----------------------------------------------------------------------
/* Two portal for 2 components
------------------------------*/

// const portalDomTarget = document.getElementById("overlays");

// function Modal(props) {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop hideCartHandler={props.hideCartHandler} />,
//         portalDomTarget
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalDomTarget
//       )}
//     </Fragment>
//   );
// }

// export default Modal;

//----------------------------------------------------------------------
/* One portal for 2 components 
--------------------------------*/

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          <Backdrop hideCartHandler={props.hideCartHandler} />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        document.getElementById("overlays"),
      )}
    </Fragment>
  );
}

export default Modal;
