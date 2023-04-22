class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(value) {
    if (this.s1.length === 0) this.s1.push(value);
    else {
      for (let i = 0; i < this.s1.length; i++) {
        this.s2.push(this.s1.pop());
      }
      this.s1.push(value);
      for (let i = 0; i < this.s2.length; i++) {
        this.s1.push(this.s2.pop());
      }
    }

    this.length++;
  }

  pop() {
    let value;
    if (this.s1.length === 0) console.log("stack is empty");
    else {
      value = this.s1.pop();
    }

    return value;
  }
}
const queue = new Queue();
queue.push(3);
queue.push(4);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
