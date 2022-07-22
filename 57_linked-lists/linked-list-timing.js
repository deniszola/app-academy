const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// `LinkedList` - `addToHead`
// Time complexity: O(1)
function linkedListAddToHeadTiming(increment) {
  const linkedList = new LinkedList();

  const startTime = Date.now();
  for (let i = 0; i < increment; i++) linkedList.addToHead(i);
  const endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}

n = 10000;
console.log(`LinkedList addToHead(${n}): `);
linkedListAddToHeadTiming(n);
console.log("\n***********\n");

// `LinkedList` - `addToTail`
// Time complexity: O(n)
function linkedListAddToTailTiming(increment) {
  const linkedList = new LinkedList();

  const startTime = Date.now();
  for (let i = 0; i < increment; i++) linkedList.addToTail(i);
  const endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}

n = 10000;
console.log(`LinkedList addToTail(${n}): `);
linkedListAddToTailTiming(n);
console.log("\n***********\n");

/* ================================================== */

// `DoublyLinkedList` - `addToHead`
// Time complexity: O(1)
function doublyLinkedListAddToHeadTiming(increment) {
  const doublyLinkedList = new DoublyLinkedList();

  const startTime = Date.now();
  for (let i = 0; i < increment; i++) doublyLinkedList.addToHead(i);
  const endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}

n = 10000;
console.log(`DoublyLinkedList addToHead(${n}): `);
doublyLinkedListAddToHeadTiming(n);
console.log("\n***********\n");

// `DoublyLinkedList` - `addToTail`
// Time complexity: O(1)
function doublyLinkedListAddToTailTiming(increment) {
  const doublyLinkedList = new DoublyLinkedList();

  const startTime = Date.now();
  for (let i = 0; i < increment; i++) doublyLinkedList.addToTail(i);
  const endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}

n = 10000;
console.log(`DoublyLinkedList addToTail(${n}): `);
doublyLinkedListAddToTailTiming(n);
console.log("\n***********\n");
