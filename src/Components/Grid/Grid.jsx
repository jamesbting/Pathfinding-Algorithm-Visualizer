import React, { Component } from "react";
import Node from "../Node/Node";
import MazeGenerator from "../../Algorithms/MazeGenerator";

//default start and end nodes
const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;
//default number of rows and cols
const NUM_ROWS = 20;
const NUM_COLS = 50;

const PATH_SPEEDS = [100, 50, 5];
const VISITED_SPEEDS = [20, 10, 1];

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      rows: NUM_ROWS,
      cols: NUM_COLS,
      grid: [],
      algorithm: null,
      mouseIsPressed: false,
      currentSpeed: 1,
      generator: new MazeGenerator(),
    };
    //bind the "this" keyword to the grid object in the following methods
    this.visualizeAlgorithm = this.visualizeAlgorithm.bind(this);
    this.visualizeMaze = this.visualizeMaze.bind(this);
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

  //function that animates the algorithm
  //does not change the start and end node so that the user can still see where the start and end is,
  //and so when the grid is refreshed the start and end nodes aren't lost
  animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 1; i <= visitedNodesInOrder.length - 1; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, VISITED_SPEEDS[this.state.currentSpeed] * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (
          document.getElementById(`node-${node.row}-${node.col}`).className ===
          "node node-start"
        )
          return;
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, VISITED_SPEEDS[this.state.currentSpeed] * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, PATH_SPEEDS[this.state.currentSpeed] * i);
    }
  }

  //returns a boolean based on if a path was found or not
  visualizeAlgorithm() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];

    this.state.algorithm.solve(grid, startNode, finishNode);
    const nodesInShortestPathOrder = this.state.algorithm.getPath();
    const visitedNodesInOrder = this.state.algorithm.getVisitedNodesInOrder();
    this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeMaze() {
    const listOfWalls = this.state.generator.generate(
      this.state.grid,
      this.state.grid[0][0]
    );
    this.animateWalls(listOfWalls);
  }

  animateWalls(listOfWalls) {
    for (let i = 0; i < listOfWalls.length; i++) {
      setTimeout(() => {
        const node = listOfWalls[i];
        if (
          document.getElementById(`node-${node.row}-${node.col}`).className ===
            "node node-start" ||
          document.getElementById(`node-${node.row}-${node.col}`).className ===
            "node node-finish"
        ) {
          return;
        }
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-wall";
      }, PATH_SPEEDS[this.state.currentSpeed] * i);
    }
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({
      grid,
      algorithm: this.props.algorithm,
      currentSpeed: this.props.speed,
    });
    this.props.setClick(this.visualizeAlgorithm);
    this.props.setClick(this.visualizeMaze);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.speed !== state.currentSpeed) {
      return { currentSpeed: props.speed };
    } else if (props.algorithm !== state.algorithm) {
      //ideally i would have like to compare if they are instances of the same class, but i'm not sure how to do that right now
      Grid.rebuildGrid(state.grid);
      return { algorithm: props.algorithm };
    }
    return null;
  }

  render() {
    const { mouseIsPressed } = this.state;
    return (
      <div className="grid">
        {this.state.grid.map((row, rowIdx) => {
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
                    onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                    onMouseUp={() => this.handleMouseUp()}
                    row={row}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  //re render the grid after changing algorithms - not working at the moment
  static rebuildGrid(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        const className = document.getElementById(`node-${row}-${col}`)
          .className;
        if (className === "node node-start" || className === "node node-end") {
          continue;
        } else if (
          className === "node node-shortest-path" ||
          className === "node node-visited"
        ) {
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
    }
  }
}

//function that initializes the grid
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

//function that creates a new node component
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
