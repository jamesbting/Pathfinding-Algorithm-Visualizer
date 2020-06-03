import React, { Component } from "react";
import InformationBox from "../InformationBox/InformationBox";
import StaticNode from "../StaticNode/StaticNode";

import "./TopBar.css";

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
        ></StaticNode>
      }
    ></InformationBox>
  );
};
