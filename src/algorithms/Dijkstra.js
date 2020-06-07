// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.

import { AbstractAlgorithm } from "./AbstractAlgorithm";

//can improve the speed by using a min heap
export default class Dijkstra extends AbstractAlgorithm {
  constructor() {
    super();
    this.name = "Dijkstra's Algorithm";
    this.description =
      "Dijkstra's Algorithm is a greedy algorithm that finds the shortest path between 2 nodes. For a given source node in the graph, the algorithm finds the shortest path between the current node and every other node. While simple and viable, it is possible to improve on it's performance with algorithms such as A * Search.";
    this.path = [];
    this.visitedNodesInOrder = [];
  }

  solve(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = this.getAllNodes(grid);
    while (!!unvisitedNodes.length) {
      //while there are unvisitedNodes in the queue,

      this.sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();

      // If we encounter a wall, we skip it.
      if (closestNode.isWall) continue;

      // If the closest node is at a distance of infinity,
      // we must be trapped and should therefore stop.
      if (closestNode.distance === Infinity) {
        this.visitedNodesInOrder = visitedNodesInOrder;
        this.getNodesInShortestPathOrder(finishNode);
        return true;
      }
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) {
        this.visitedNodesInOrder = visitedNodesInOrder;
        this.getNodesInShortestPathOrder(finishNode);
        return true;
      }
      this.updateUnvisitedNeighbors(closestNode, grid);
    }
  }

  //takes a list of nodes and sorts them by their distance from the start node in ascending order
  sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }

  updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = this.getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
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

  getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  // Backtracks from the finishNode to find the shortest path.
  // Only works when called *after* the solve method above.
  //updates the path attribute
  getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    this.path = nodesInShortestPathOrder;
  }

  getAlgorithmDescription() {
    return this.description;
  }
  getAlgorithmName() {
    return this.name;
  }
  getPath() {
    return this.path;
  }
  getVisitedNodesInOrder() {
    return this.visitedNodesInOrder;
  }
}
