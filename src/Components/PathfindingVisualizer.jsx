import React, { Component } from "react";

import "./PathfindingVisualizer.css";

import InformationBar from "./InformationBar/InformationBar";
import { Button, Toolbar } from "@material-ui/core";
import Dijkstra from "../Algorithms/Dijkstra.js";
import AlgorithmMenu from "./AlgorithmMenu/AlgorithmMenu";
import Grid from "./Grid/Grid";
import TopBar from "./TopBar/TopBar";
import SpeedMenu from "./SpeedMenu/SpeedMenu";

export default class PathfindingVisualizer extends Component {
  //constructor for the app, this class is an aggregate for all the different components and serves as the communicator between all the different classes
  constructor() {
    super();
    this.state = {
      algorithm: new Dijkstra(),
      speed: 1,
    };
    //bind this in the method changeAlgorithm to the current instance of the PathfindingVisualizer
    this.algorithmChangeHandler = this.changeAlgorithm.bind(this);
    this.speedChangeHandler = this.changeSpeed.bind(this);
  }

  render() {
    const algorithm = this.state.algorithm;
    const speed = this.state.speed;

    return (
      <div className="app">
        {/* Make a top bar element */}
        <TopBar text={"Pathfinding Algorithm Visualizer"}></TopBar>

        {/* Make Information bar element */}
        <InformationBar></InformationBar>

        {/* Solve the problem button*/}
        <Toolbar>
          <AlgorithmMenu
            handler={this.algorithmChangeHandler}
            variant="contained"
            title="Select an algorithm"
          ></AlgorithmMenu>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.clickChild();
            }}
          >
            Visualize {algorithm.getAlgorithmName()}
          </Button>
          <SpeedMenu
            handler={this.speedChangeHandler}
            variant="contained"
            title="Change Speeds"
          ></SpeedMenu>
        </Toolbar>
        {/* A sentence describing the algorithm */}
        <div className="algorithm-description">
          {algorithm.getAlgorithmDescription()}
        </div>

        {/* The grid */}
        <Grid
          algorithm={algorithm}
          setClick={(click) => (this.clickChild = click)}
          changeAlgorithm={this.changeAlgorithm}
          changeSpeed={this.changeSpeed}
          speed={speed}
        ></Grid>
        {/* Some credits */}
        <div className="BottomBox">
          <p>
            This React app was created by{" "}
            <a
              href="https://www.linkedin.com/in/james-b-ting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              James Ting
            </a>{" "}
            as a personal project to learn React and JavaScript. Check out the
            source code on{" "}
            <a
              href="https://github.com/jamesbting/Pathfinding-Algorithm-Visualizer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  //function that changes the algorithm
  changeAlgorithm(newAlgorithm) {
    this.setState({ algorithm: newAlgorithm });
  }

  changeSpeed(newSpeed) {
    this.setState({ speed: newSpeed });
  }
}
