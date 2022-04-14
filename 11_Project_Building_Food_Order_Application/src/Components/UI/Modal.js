import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

//-------------------------------------
function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideCartHandler}>
      Modal
    </div>
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

//-------------------------------------

const portalDomTarget = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalDomTarget
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDomTarget
      )}
    </React.Fragment>
  );
}

export default Modal;
