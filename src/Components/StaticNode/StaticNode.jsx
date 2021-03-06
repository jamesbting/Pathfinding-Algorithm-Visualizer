import React from "react";

import "../Node/Node.css";
/// class that represents a static node, that is used with the information box, to depict the different types of nodes
export default function StaticNode(props) {
  const { isFinish, isStart, isWall, isPath, isVisited } = props;
  //ternary that create an extra classname for CSS coloring.
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : isPath
    ? "node-shortest-path"
    : isVisited
    ? "node-visited"
    : "";

  return <div className={`node ${extraClassName}`}></div>;
}
