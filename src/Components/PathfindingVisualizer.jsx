import React, { Component } from "react";

import "./PathfindingVisualizer.css";

import TopBar from "./TopBar/TopBar";
import { Button } from "@material-ui/core";
import Dijkstra from "../Algorithms/Dijkstra.js";
import AlgorithmMenu from "./AlgorithmMenu/AlgorithmMenu";
import Grid from "./Grid/Grid";

export default class PathfindingVisualizer extends Component {
  //constructor for the app, this class is the
  constructor() {
    super();
    this.state = {
      algorithm: new Dijkstra(),
    };
    //bind this in the method changeAlgorithm to the current instance of the PathfindingVisualizer
    this.algorithmChangeHandler = this.changeAlgorithm.bind(this);
  }

  render() {
    const algorithm = this.state.algorithm;

    return (
      <div className="app">
        {/* Make a top bar element */}
        <TopBar text={"Pathfinding Algorithm Visualizer"}></TopBar>

        {/* Solve the problem button*/}
        <div className="options">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.clickChild();
            }}
          >
            Visualize {algorithm.getAlgorithmName()}
          </Button>
          {/* Selecting algorithm menu */}
          <AlgorithmMenu
            handler={this.algorithmChangeHandler}
            variant="contained"
            color="primary"
            title="Select an algorithm"
          ></AlgorithmMenu>
        </div>
        {/* A sentence describing the algorithm */}
        <div className="algorithm-description">
          {algorithm.getAlgorithmDescription()}
        </div>

        {/* The grid */}
        <Grid
          algorithm={algorithm}
          setClick={(click) => (this.clickChild = click)}
          changeAlgorithm={this.changeAlgorithm}
        ></Grid>
      </div>
    );
  }

  //function that changes the algorithm
  changeAlgorithm(newAlgorithm) {
    this.setState({ algorithm: newAlgorithm });
  }
}
