const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    // Time complexity: O(1)
    const newNode = new SinglyLinkedNode(val);

    if (this.head === null) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this.length;
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Time complexity: O(1)
    if (this.head === null) return null;

    const removed = this.head;
    if (removed.next === null) this.tail = null;

    this.head = removed.next;
    this.length--;
    return removed.value;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
