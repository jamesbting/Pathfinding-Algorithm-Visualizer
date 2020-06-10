import Stack from "../DataStructures/Stack";
export default class MazeGenerator {
  constructor() {
    this.stack = new Stack();
  }

  //needs to return a new grid with the walls modified
  generate(inputGrid, node) {
    const grid = this.getGrid(inputGrid);
    this.visitNode(node);
    const listOfWalls = [];

    while (!this.stack.isEmpty()) {
      const curr = this.stack.pop();
      if (curr.isStart || curr.isFinish) {
        continue;
      }
      const neighbors = this.getUnvisitedNeighbors(curr, grid);
      if (neighbors.length > 0) {
        this.stack.push(curr);
        let nextNode = Math.floor(Math.random() * neighbors.length);
        listOfWalls.push(neighbors[nextNode]);
        this.visitNode(neighbors[nextNode]);
      }
    }
    return listOfWalls;
  }

  visitNode(node) {
    node.isVisited = true;
    this.stack.push(node);
  }

  getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
  }

  getGrid(grid) {
    const newGrid = [];
    for (const row of grid) {
      const newRow = [];
      for (const node of row) {
        if (node.isStart || node.isFinish) {
          newRow.push({
            ...node,

            isVisited: false,
          });
        } else {
          newRow.push({
            ...node,
            isVisited: false,
            isWall: true,
          });
        }
      }
      newGrid.push(newRow);
    }
    console.log(newGrid);
    return newGrid;
  }

  copyReferences(grid) {
    const newGrid = [];
    for (const row of grid) {
      const newRow = [];
      for (const node of row) {
        newRow.push(node);
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }
}
