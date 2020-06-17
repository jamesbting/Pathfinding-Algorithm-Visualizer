import React from "react";
import { Button, Toolbar } from "@material-ui/core";
import AlgorithmMenu from "../AlgorithmMenu/AlgorithmMenu";
import SpeedMenu from "../SpeedMenu/SpeedMenu";

import "./ButtonBox.css";

export default function ButtonBox(props) {
  return (
    <div className="buttonBox">
      <Toolbar>
        {/* Select an algorithm menu */}
        <AlgorithmMenu
          handler={props.algorithmChangeHandler}
          variant="contained"
          title="Select an algorithm"
        ></AlgorithmMenu>

        {/* Solve the problem button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.clickChild()}
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
        ></SpeedMenu>
      </Toolbar>
    </div>
  );
}
