import React, { Component } from "react";

import "./StaticNode.css";
/// class that represents a static node, that is used with the information box, to depict the different types of nodes
export default class StaticNode extends Component {
  render() {
    const { isFinish, isStart, isWall, isPath, isVisited } = this.props;
    //ternary that returns if the node is a start node or finish node
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : isPath
      ? "node-path"
      : isVisited
      ? "node-visited"
      : "";

    return <div className={`static-node ${extraClassName}`}></div>;
  }
}
