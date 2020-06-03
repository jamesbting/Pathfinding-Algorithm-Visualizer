import React, { Component } from "react";

import "./StaticNode.css";

export default class Node extends Component {
  render() {
    const { isFinish, isStart, isWall } = this.props;
    //ternary that returns if the node is a start node or finish node
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "";

    return <div className={`static-node ${extraClassName}`}></div>;
  }
}
