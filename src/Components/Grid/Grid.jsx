import React, { Component } from "react";
import Node from "../Node/Node";
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
    };
    //bind the "this" keyword to the grid object in the following methods
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
        }, VISITED_SPEEDS[this.state.currentSpeed] * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, VISITED_SPEEDS[this.state.currentSpeed] * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
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

    const foundPath = this.state.algorithm.solve(grid, startNode, finishNode);
    const nodesInShortestPathOrder = this.state.algorithm.getPath();
    const visitedNodesInOrder = this.state.algorithm.getVisitedNodesInOrder();
    this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
  }
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({
      grid,
      algorithm: this.props.algorithm,
      currentSpeed: this.props.speed,
    });
    this.props.setClick(this.visualizeAlgorithm);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      algorithm: nextProps.algorithm,
      currentSpeed: nextProps.speed,
    });
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
  rebuildGrid(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        const className = document.getElementById(`node-${row}-${col}`)
          .className;
        if (
          className === "node node-shortest-path" ||
          className === "node node-visited"
        ) {
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
    }
  }

  rebuildGrid = (grid) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        const className = document.getElementById(`node-${row}-${col}`)
          .className;
        if (
          className === "node node-shortest-path" ||
          className === "node node-visited"
        ) {
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
    }
  };
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
