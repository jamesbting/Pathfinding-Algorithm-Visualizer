// class representing a single node in a graph
class Node {
    constructor(x,y,isAWall) {
        // verify preconditions
        Node.assert(typeof(x) === 'number',"X should be a number");
        Node.assert(typeof(y) === 'number',"Y should be a number");
        Node.assert(typeof(isAWall) === 'boolean','isAWall should be a boolean');

        this.x = x;
        this.y = y;
        this.isAWall = isAWall;
        
        // uncomment this block if you want a type of adjacency list
        /*
        this.topNode;
        this.bottomNode;
        this.leftNode;
        this.rightNode;
        */
        Object.seal(this);
    }

    // uncomment this block if you want a type of adjacency list
    /*
    // function that sets the adjacent nodes
    setAdjacentNodes = function(topNode, bottomNode, leftNode, rightNode) {
        for (var i = 0; i < arguments.length; i++) {
            Node.assert(arguments[i] instanceof Node,"Adjacent Nodes should be instances of the Node class");
        }
        this.topNode = topNode;
        this.bottomNode = bottomNode;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    */

    // function that throws an error if a condition is not met
    // used for checking the 
    static assert = function(condition, message) {
        if (!condition)
            throw Error('Assert failed: ' + (message || ''));
    };

    //these methods are included for readability of future code
    //returns an integer representing the x coordinate of the current node
    getXCoord = () => this.x;

    //returns an integer representing the y coordinate of the current node
    getYCoord = () => this.y;

    // returns a boolean representing if the current node is a wall
    isWall = () => this.isAWall;
}

