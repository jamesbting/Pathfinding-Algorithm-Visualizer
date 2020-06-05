import React, { Component } from "react";

import "./InformationBox.css";
// class that represents the box that wraps the pictorial representations of the different types of nodes
export default class InformationBox extends Component {
  render() {
    return (
      <div className={`information information--${this.props.informationType}`}>
        <>
          {this.props.text}
          {this.props.childComponent}
        </>
      </div>
    );
  }
}
