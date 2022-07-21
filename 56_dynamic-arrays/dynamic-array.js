class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.length === this.capacity) this.resize();

    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (this.length === 0) return this.data[0];

    this.length--;
    const popped = this.data[this.length];
    this.data[this.length] = undefined;

    return popped;
  }

  unshift(val) {
    // Your code here
    if (this.length === this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) this.data[i] = this.data[i - 1];
    this.data[0] = val;
    this.length++;
  }

  shift() {
    // Your code here
    if (this.length === 0) return this.data[0];

    const shifted = this.data[0];
    for (let i = 0; i < this.length; i++) this.data[i] = this.data[i + 1];
    this.length--;

    return shifted;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.length; i++) if (this.data[i] === val) return i;

    return -1;
  }

  resize() {
    // Your code here
    const newCapacity = this.capacity * 2;
    const newData = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) newData[i] = this.data[i];
    this.capacity = newCapacity;
    this.data = newData;
  }
}

module.exports = DynamicArray;
