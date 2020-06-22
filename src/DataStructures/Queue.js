//custom queue class
//this could also be implemented using the Heap class, which would make it faster
//however, we are not dealing with large numbers of elements, so using push and shift should suffice

export class Queue {
  constructor(type) {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
