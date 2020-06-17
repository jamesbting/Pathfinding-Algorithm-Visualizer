import React from "react";
import { Button, Toolbar } from "@material-ui/core";
import AlgorithmMenu from "../AlgorithmMenu/AlgorithmMenu";
import SpeedMenu from "../SpeedMenu/SpeedMenu";

export default function ButtonBox(props) {
  return (
    <Toolbar className="buttonBox">
      {/* Select an algorithm menu */}
      <AlgorithmMenu
        handler={props.algorithmChangeHandler}
        variant="contained"
        title="Select an algorithm"
        className="button"
      ></AlgorithmMenu>
      {/* Solve the problem button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.clickChild()}
        className="button"
      >
        Visualize {props.algorithm.getAlgorithmName()}
      </Button>
      {/* Generate a maze algorithm */}
      {/* <Button
            variant="contained"
            color="primary"
            onClick={() => this.clickChild()}
          >
            Generate a random maze
          </Button> */}
      {/* Select the speed menu */}
      <SpeedMenu
        handler={props.speedChangeHandler}
        variant="contained"
        title="Change Speeds"
        className="button"
      ></SpeedMenu>
    </Toolbar>
  );
}
