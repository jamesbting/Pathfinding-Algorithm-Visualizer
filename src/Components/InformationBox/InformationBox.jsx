import React, { Component } from "react";

import "./InformationBox.css";

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
