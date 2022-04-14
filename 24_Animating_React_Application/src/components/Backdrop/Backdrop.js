import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  return (
    <div
      className={props.show ? "Backdrop BackdropOpen" : "Backdrop BackdropClosed"}
    ></div>
  );
};

export default backdrop;
