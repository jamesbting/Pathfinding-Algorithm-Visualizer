import { AbstractAlgorithm } from "./AbstractAlgorithm";

//use the Manhattan distance heuristic
export default class ASearch extends AbstractAlgorithm {
  constructor() {
    super();
    this.name = "A* Search Algorithm";
    this.description =
      "A* Search is a greedy best-first-search algorithm that is based on Dijkstra's Algorithm. This one uses the Manhattan heuristic to determine which noes to search through.";
    this.path = [];
    this.visitedNodesInOrder = [];
  }
  //TODO: Fix bug where it dosent find the path - it dont work
  solve(grid, startNode, finishNode) {
    //initialize open and closed list, and make a grid where each node has a h,f,g value
    const currGrid = this.getGrid(grid);
    const openList = [];
    const closedList = [];

    startNode.g = 0;
    startNode.f = 0;
    openList.push(startNode);

    while (!!openList.length) {
      this.sortNodesByF(openList);
      const currentNode = openList.shift();
      this.visitedNodesInOrder.push(currentNode);

      closedList.push(currentNode);

      if (this.equals(currentNode, finishNode)) {
        const path = [];
        var current = currentNode;
        while (current != null) {
          path.push(current);
          current = current.parent;
        }
        path.reverse();
        this.path = path;
        return true;
      }

      const children = this.getNeighbors(currentNode, currGrid);
      for (var i = 0; i < children.length; i++) {
        const child = children[i];
        if (closedList.includes(child) || child.isWall) {
          continue;
        }
        child.parent = currentNode;
        child.g = currentNode.g + 1;
        child.h = this.ManhattanHeuristic(child, finishNode);
        child.f = child.g + child.h;

        if (openList.includes(child)) {
          const copy = openList.find((element) => this.equals(child, element));
          if (copy.g < child.g) {
            continue;
          }
        }
        openList.push(child);
      }
    }
    return false;
  }

  contains(array, node) {
    for (const element in array) {
      if (node === element) {
        return element;
      }
    }
    return null;
  }

  equals(nodeA, nodeB) {
    return nodeA.row === nodeB.row && nodeA.col === nodeB.col;
  }

  sortNodesByF(nodes) {
    nodes.sort((nodeA, nodeB) => nodeA.f - nodeB.f);
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

  ManhattanHeuristic(nodeA, nodeB) {
    return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
  }
  getPath() {
    return this.path;
  }

  getAlgorithmDescription() {
    return this.description;
  }

  getAlgorithmName() {
    return this.name;
  }

  getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    this.path = nodesInShortestPathOrder;
  }

  getGrid(grid) {
    const newGrid = [];
    for (const row of grid) {
      const newRow = [];
      for (const node of row) {
        newRow.push({ h: 0, f: 0, g: 0, isVisited: false, ...node });
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }

  getVisitedNodesInOrder() {
    return this.visitedNodesInOrder;
  }
}
