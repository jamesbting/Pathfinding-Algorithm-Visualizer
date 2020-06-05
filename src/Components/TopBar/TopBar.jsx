import React, { Component } from "react";
import InformationBox from "../InformationBox/InformationBox";
import StaticNode from "../StaticNode/StaticNode";

import "./TopBar.css";

//class that represents the top portion above the grid, and is an container for the static node classes
export default class TopBar extends Component {
  render() {
    return (
      <>
        <div className="topbar">
          {this.props.text}
          <div>
            {createInformationBox("Start")}
            {createInformationBox("Finish")}
            {createInformationBox("Wall")}
            {createInformationBox("Path")}
            {createInformationBox("Visited")}
            {createInformationBox("Regular")}
          </div>
        </div>
      </>
    );
  }
}
const createInformationBox = (type) => {
  const isStart = type === "Start";
  const isFinish = type === "Finish";
  const isWall = type === "Wall";
  const isPath = type === "Path";
  const isVisited = type === "Visited";
  return (
    <InformationBox
      informationType={`${type}-node`}
      text={`${type} node `}
      childComponent={
        <StaticNode
          isStart={isStart}
          isFinish={isFinish}
          isWall={isWall}
          isPath={isPath}
          isVisited={isVisited}
        ></StaticNode>
      }
    ></InformationBox>
  );
};
