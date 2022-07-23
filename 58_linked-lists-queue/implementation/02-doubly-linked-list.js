// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to head of linked list
    // Time complexity: O(1)
    const newNode = new DoublyLinkedNode(val);

    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Time complexity: O(1)
    const newNode = new DoublyLinkedNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Time complexity: O(1)
    if (this.head === null) return;

    const removed = this.head;
    if (removed.next === null) this.tail = null;
    else removed.next.prev = null;

    this.head = removed.next;
    this.length--;
    return removed.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Time complexity: O(1)
    if (this.tail === null) return;

    const removed = this.tail;
    if (removed.prev === null) this.head = null;
    else removed.prev.next = null;

    this.tail = removed.prev;
    this.length--;
    return removed.value;
  }

  peekAtHead() {
    // Return value of head node
    // Time complexity: O(1)
    if (this.head === null) return;

    return this.head.value;
  }

  peekAtTail() {
    // Return value of tail node
    // Time complexity: O(1)
    if (this.tail === null) return;

    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
