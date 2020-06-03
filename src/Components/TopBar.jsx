import React, { Component } from "react";
import InformationBox from "./InformationBox";
import StaticNode from "./StaticNode";

import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <>
        <div className="topbar">
          <div className="informationBox">
            {this.props.text}
            {createInformationBox(true, false, false)}
            {createInformationBox(false, true, false)}
            {createInformationBox(false, false, true)}
            {createInformationBox(false, false, false)}
          </div>
        </div>
      </>
    );
  }
}
const createInformationBox = (isStart, isFinish, isWall) => {
  const type = isStart
    ? "Start"
    : isFinish
    ? "Finish"
    : isWall
    ? "Wall"
    : "Regular";
  return (
    <InformationBox
      informationType={`${type}-node`}
      text={`${type} node `}
      childComponent={
        <StaticNode
          isStart={isStart}
          isFinish={isFinish}
          isWall={isWall}
        ></StaticNode>
      }
    ></InformationBox>
  );
};
