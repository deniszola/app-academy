// Basic implementation of Nodes and Linked List for you to use
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    this.length++;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity

    // Time complexity: O(n)
    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    return length;

    /**
     * Time complexity: O(1)
     * Uses a `length` property on the `constructor` that is incremented
     * or decremented when adding or removing a `linkNode`
     */
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Time complexity: O(n)
    let current = this.head;
    let sum = 0;

    while (current) {
      sum += current.value;
      current = current.next;
    }

    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Time complexity: O(n)
    let current = this.head;
    let length = 0;
    let sum = 0;

    while (current) {
      length++;
      sum += current.value;
      current = current.next;
    }

    return sum / length;
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Time complexity: O(n)
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === n) return current;

      current = current.next;
      count++;
    }

    return null;
  }

  findMid() {
    // Returns the middle node
    // Time complexity: O(n)
    let slow_ptr = this.head;
    let fast_ptr = this.head.next;

    while (fast_ptr && fast_ptr.next) {
      slow_ptr = slow_ptr.next;
      fast_ptr = fast_ptr.next.next;
    }

    return slow_ptr;
    // How do the implementation for singly and doubly vary if at all?
    // They vary in implementation but are practically the same. In both
    // we traverse the list only once and only until half of the way.
    // - Singly we use a second pointer that advances 2 nodes at a time,
    // so when it gets to the end the first pointer is in the middle node.
    // - Doubly we use a second pointer that retreats from the tail
    // until it finds the head pointer and consequently the middle node.
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Time complexity: O(n)
    let iterator = this.head;
    let current = iterator;
    const newList = new SinglyLinkedList();

    while (iterator) {
      iterator = iterator.next;

      current.next = newList.head;
      newList.head = current;
      current = iterator;
    }

    return newList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Time complexity: O(n)
    let iterator = this.head;
    let current = iterator;
    const tail = iterator;

    while (iterator) {
      iterator = iterator.next;

      current.next = this.head;
      this.head = current;
      current = iterator;
    }

    tail.next = null;
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Time complexity: O(n)
    let head = this.head;
    let tail = this.tail;

    while (head) {
      if (head === tail || head.next === tail) break;

      head = head.next;
      tail = tail.prev;
    }

    return head;
    // How do the implementation for singly and doubly vary if at all?
    // They vary in implementation but are practically the same. In both
    // we traverse the list only once and only until half of the way.
    // - Singly we use a second pointer that advances 2 nodes at a time,
    // so when it gets to the end the first pointer is in the middle node.
    // - Doubly we use a second pointer that retreats from the tail
    // until it finds the head pointer and consequently the middle node.
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Time complexity: O(n)
    let iterator = this.tail;
    const newList = new DoublyLinkedList();

    while (iterator) {
      newList.addToTail(iterator.value);
      iterator = iterator.prev;
    }

    return newList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Time complexity: O(n)
    let previous = this.tail.prev;
    let current = previous;
    let next = this.tail;

    next.next = previous;
    next.prev = null;

    while (previous) {
      previous = previous.prev;

      current.next = previous;
      current.prev = next;

      next = current;
      current = previous;
    }

    this.head = this.tail;
    this.tail = next;
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
