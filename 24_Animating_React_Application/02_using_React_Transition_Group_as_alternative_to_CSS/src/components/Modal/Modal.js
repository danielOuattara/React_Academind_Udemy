import React from "react";
import "./Modal.css";

const modal = (props) => {
  return (
    <div className={props.show ? "Modal ModalOpen" : "Modal ModalClosed"}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
