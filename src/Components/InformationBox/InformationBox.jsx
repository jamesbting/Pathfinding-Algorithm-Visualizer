import React from "react";

import "./InformationBox.css";

// class that represents the box that wraps the pictorial representations of the different types of nodes
export default function InformationBox(props) {
  return (
    <div className={`information information--${props.informationType}`}>
      <>
        {props.text}
        {props.childComponent}
      </>
    </div>
  );
}
