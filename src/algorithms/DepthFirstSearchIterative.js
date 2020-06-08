import { AbstractAlgorithm } from "./AbstractAlgorithm";
import Stack from "../DataStructures/Stack";

export default class DepthFirstSearchIterative extends AbstractAlgorithm {
  constructor() {
    super();
    this.name = "Depth First Search (Iterative)";
    this.description =
      "Depth First Search (DFS) is an algorithm for traversing a graph that explores as far as possible along each branch before continuing. It is useful when the answer we are looking for is far away from the starting node that we are given. This particular instance of depth first search is implemented with a stack. Note it is also possible to implement DFS with recursion.";
    this.path = [];
    this.visitedNodesInOrder = [];
  }

  solve(grid, startNode, finishNode) {
    const newGrid = this.getAllNodes(grid);
    const stack = new Stack();
    this.visitNode(startNode, stack);
    while (!stack.isEmpty()) {
      const u = stack.pop();

      if (this.equals(u, finishNode)) {
        this.path = this.buildPath(u);
        return true;
      }

      const neighbors = this.getNeighbors(u, newGrid);
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        //check if it has been visited already or if it is a wall
        if (w.isVisited || w.isWall) {
          continue;
        }
        //not visited an not a wall, so valid node
        this.visitNode(w, stack);
        w.parent = u;
        stack.push(w);
      }
    }
    return false;
  }

  visitNode(node, stack) {
    stack.push(node);
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
  //some getter methods to return properties of the object
  getPath() {
    return this.path;
  }

  getAlgorithmDescription() {
    return this.description;
  }

  getAlgorithmName() {
    return this.name;
  }

  getVisitedNodesInOrder() {
    return this.visitedNodesInOrder;
  }
}
