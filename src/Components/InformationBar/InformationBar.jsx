import React from "react";
import InformationBox from "../InformationBox/InformationBox";
import StaticNode from "../StaticNode/StaticNode";

import "./InformationBar.css";

//class that represents the top portion above the grid, and is an container for the static node classes
export default function InformationBar(props) {
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

  return (
    <>
      <div className="nodeInformationBox">
        {props.text}
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
