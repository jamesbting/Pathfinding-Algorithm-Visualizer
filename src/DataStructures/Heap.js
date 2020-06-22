//this class represents a min heap

export default class Heap {
  constructor() {
    this.heap = [null]; // dummy element at index 0
  }

  //get the first element in the heap
  get() {
    return this.heap[1];
  }

  push(node) {
    //push it to the end of the node
    this.heap.push(node);
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      //upheap the node to its correct position
      while (
        current > 1 &&
        this.nodeComparator(
          this.heap[Math.floor(current / 2)],
          this.heap[current]
        ) > 0
      ) {
        let next = this.heap[Math.floor(current / 2)];
        let curr = this.heap[current];
        this.heap[current] = next;
        this.heap[Math.floor(current / 2)] = curr;
        current = Math.floor(current / 2);
      }
    }
  }

  //remove the first element in the heap
  pop() {
    let smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      //down heap the element to its correct position
      if (this.heap.length === 3) {
        if (this.nodeComparator(this.heap[1], this.heap[2]) > 0) {
          let temp = this.heap[1];
          this.heap[1] = this.heap[2];
          this.heap[2] = temp;
        }
        return smallest;
      }

      //useful vars
      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;
      let leftChild = this.heap[leftChildIndex];
      let rightChild = this.heap[rightChildIndex];
      let curr = this.heap[current];

      while (
        leftChild != null &&
        rightChild != null &&
        (this.nodeComparator(curr, leftChild) >= 0 ||
          this.nodeComparator(curr, rightChild) >= 0)
      ) {
        //left child is less than or equal to right child, swap with left
        if (this.nodeComparator(leftChild, rightChild) <= 0) {
          this.heap[leftChildIndex] = curr;
          this.heap[current] = leftChild;
          current = leftChildIndex;
          //swap with right
        } else {
          this.heap[rightChildIndex] = curr;
          this.heap[current] = rightChild;
          current = rightChildIndex;
        }
        //update elements
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
        leftChild = this.heap[leftChildIndex];
        rightChild = this.heap[rightChildIndex];
        curr = this.heap[current];
      }
    } else if (this.heap.length === 2) {
      /* If there are only two elements in the array, we directly splice out the first element */
      this.heap.splice(1, 1);
    }
    return smallest;
  }

  nodeComparator(nodeA, nodeB) {
    return nodeA.f - nodeB.f;
  }

  includesElement(node) {
    return this.heap.includes(node);
  }

  findElement(key) {
    return this.heap.find((element) => this.equals(key, element));
  }

  size() {
    return this.heap.size - 1;
  }
  equals(nodeA, nodeB) {
    if (nodeA == null || nodeB == null) {
      return false;
    }
    return nodeA.row === nodeB.row && nodeA.col === nodeB.col;
  }
}
