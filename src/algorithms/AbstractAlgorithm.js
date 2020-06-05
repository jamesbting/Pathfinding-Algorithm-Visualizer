//Abstract class that should be an extended for the making the algorithm
//Should not be instantiated
//each concrete extension of this class should have 4 attributes
//1) name : the name of the algorithm
//2) description: a short sentence or 2 that describes the algorithm
//3) path: an array of nodes that represents the last solved path
//4) visitedNodesInOrder: an array of nodes that represents the last set of nodes that were visited, in the order that they were visited

export class AbstractAlgorithm {
  // function that takes as input a grid, as well as the start and end node, which
  solve(grid, startNode, finishNode) {}

  //some getter methods
  getPath() {}

  getAlgorithmDescription() {}

  getAlgorithmName() {}

  getVisitedNodesInOrder() {}
}
