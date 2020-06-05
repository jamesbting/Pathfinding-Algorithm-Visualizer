import React, { Component } from "react";
import Node from "../Node/Node";
//default start and end nodes
const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
//default number of rows and cols
const NUM_ROWS = 20;
const NUM_COLS = 50;

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      rows: NUM_ROWS,
      cols: NUM_COLS,
      grid: [],
      algorithm: null,
      mouseIsPressed: false,
    };
    //bind the "this" keyword to the grid object in the following methods
    this.algorithmChangeHandler = this.changeAlgorithm.bind(this);
    this.visualizeAlgorithm = this.visualizeAlgorithm.bind(this);
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

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  //returns a boolean based on if a path was found or not
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
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid, algorithm: this.props.algorithm });
    this.props.setClick(this.visualizeAlgorithm);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ algorithm: nextProps.algorithm });
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
  //function that modifies the current state of the solver, in order to support functionality for multiple algorithms
  changeAlgorithm(newAlgorithm) {
    this.setState({ algorithm: newAlgorithm });
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
