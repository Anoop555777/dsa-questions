class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(value) {
    if (this.rear >= this.size - 1 && this.front <= 0)
      console.log("queue overflow");
    else if (this.rear + 1 === this.front) console.log("queue overflow");
    else {
      if (this.rear === this.size - 1 && this.front > 0) {
        this.rear = 0;
        this.queue[this.rear] = value;
      } else {
        if (this.front === -1) this.front = 0;
        this.rear++;
        this.queue[this.rear] = value;
      }
    }
  }

  dequeue() {
    let value;
    if (this.front === -1) console.log("queue underflow");
    else if (this.front === this.rear) {
      console.log("queue underflow");
      this.front = this.rear = -1;
    } else {
      if (this.front === this.size - 1 && this.rear < this.front) {
        this.front = 0;
        value = this.queue[this.front];
      } else {
        value = this.queue[this.front];
        this.front++;
      }
    }
    return value;
  }
}

const queue = new Queue(5);
queue.enqueue(20);
queue.enqueue(5);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);

console.log(queue.dequeue());
queue.enqueue(1);
console.log(queue);
console.log(queue.dequeue());
