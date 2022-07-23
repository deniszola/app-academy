// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    // Time complexity: O(1)
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    // Time complexity: O(n)
    const newNode = new SinglyLinkedNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }

    this.length++;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Time complexity: O(1)
    if (this.head === null) return;

    const removed = this.head;
    this.head = removed.next;
    this.length--;
    return removed;
  }

  removeFromTail() {
    // Remove node at tail
    // Time complexity: O(n)
    if (this.head === null) return;

    let current = this.head;
    if (current.next === null) {
      this.head = null;
      this.length--;
      return current;
    }

    let previous = current;
    current = current.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.length--;
    return current;
  }

  peekAtHead() {
    // Return value of head node
    // Time complexity: O(1)
    if (this.head === null) return;

    return this.head.value;
  }

  print() {
    // Print out the linked list
    // Time complexity: O(n)
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
