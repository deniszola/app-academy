const { Queue } = require("../03-queue.js");
const { expect } = require("chai");

describe("Queue", () => {
  describe("Queue Behavior", function () {
    it("Should enqueue and dequeue in O(1) time", function () {
      const queue = new Queue();

      const timeout = 100;
      const startTime = Date.now();

      for (let i = 0; i < 50000; i++) {
        queue.enqueue(i);
      }

      for (let i = 0; i < 50000; i++) {
        queue.dequeue();
      }

      const endTime = Date.now();

      expect(endTime - startTime < timeout).to.be.true;
    });
  });
});
