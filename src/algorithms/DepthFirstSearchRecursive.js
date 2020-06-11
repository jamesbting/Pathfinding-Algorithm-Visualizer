import { AbstractAlgorithm } from "./AbstractAlgorithm";
/*NOT WORKING - It just goes to a corner and gets stuck there */
export default class DepthFirstSearchRecursive extends AbstractAlgorithm {
  constructor() {
    const description =
      "Depth First Search (DFS) is an algorithm for traversing a graph that explores as far as possible along each branch before continuing. It is useful when the answer we are looking for is far away from the starting node that we are given. This particular instance of depth first search is implemented with a recursive algorithm and does not guarantee the shortest path. Note it is also possible to implement DFS iteratively using a Stack.";
    const name = "Depth First Search (Recursive)";
    const link = "https://www.youtube.com/watch?v=7fujbpJ0LB4";
    super(name, description, link);
  }
  solve(grid, startNode, finishNode) {
    const currGrid = this.getAllNodes(grid);
    this.traverse(currGrid, startNode, finishNode);
  }

  traverse(grid, startNode, finishNode) {
    this.visitNode(startNode);
    if (this.equals(startNode, finishNode)) {
      this.path = this.buildPath(startNode);
    }

    const neighbors = this.getNeighbors(startNode, grid);
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      //check if it has been visited already or if it is a wall
      if (w.isVisited || w.isWall) {
        continue;
      }

      w.parent = startNode;
      this.traverse(grid, w, finishNode);
    }
  }

  visitNode(node) {
    this.visitedNodesInOrder.push(node);
    node.isVisited = true;
  }

  buildPath(lastNode) {
    const path = [];
    var current = lastNode;
    while (current != null) {
      path.push(current);
      current = current.parent;
    }
    path.reverse();
    return path;
  }

  getAllNodes(grid) {
    const newGrid = [];
    for (const row of grid) {
      const newRow = [];
      for (const node of row) {
        newRow.push({
          parent: null,
          isVisited: false,
          ...node,
        });
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }

  getNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors;
  }
  equals(nodeA, nodeB) {
    return nodeA.row === nodeB.row && nodeA.col === nodeB.col;
  }
}
