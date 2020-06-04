import React, { Component } from "react";
import Node from "./Node/Node";
import Dijkstra from "../Algorithms/Dijkstra.js";
import AlgorithmMenu from "./AlgorithmMenu/AlgorithmMenu";

import "./PathfindingVisualizer.css";
import TopBar from "./TopBar/TopBar";
import { Button } from "@material-ui/core";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
const NUM_ROWS = 20;
const NUM_COLS = 50;

export default class PathfindingVisualizer extends Component {
  //constructor for the app, this class is the
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      algorithm: new Dijkstra(),
    };
    //bind this in the method changeAlgorithm to the current instance of the PathfindingVisualizer
    this.algorithmChangeHandler = this.changeAlgorithm.bind(this);
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  //function that animates the algorihm
  animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  //
  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeAlgorithm() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];

    const foundPath = this.state.algorithm.solve(grid, startNode, finishNode);
    if (foundPath) {
      const nodesInShortestPathOrder = this.state.algorithm.getPath();
      const visitedNodesInOrder = this.state.algorithm.getVisitedNodesInOrder();
      this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    console.log(this.state.algorithm);
    const description = this.state.algorithm.description;

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
              const foundPath = this.visualizeAlgorithm();
              if (!foundPath) {
                //do something
              }
            }}
          >
            Visualize {this.state.algorithm.getAlgorithmName()}
          </Button>
          {/* Selecting algorithm menu */}
          <AlgorithmMenu
            handler={this.algorithmChangeHandler}
            variant="contained"
            color="primary"
          ></AlgorithmMenu>
        </div>
        {/* A sentence describing the algorithm */}
        <div className="algorithm-description">{description}</div>

        {/* The grid */}
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  //function that changes the algorithm
  changeAlgorithm(newAlgorithm) {
    this.setState({ algorithm: newAlgorithm });
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < NUM_COLS; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
