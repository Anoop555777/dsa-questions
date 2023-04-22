class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(value) {
    if (this.rear >= this.size - 1) console.log("queue overflow");
    else {
      if (this.front === -1) this.front = 0;
      this.rear++;
      this.queue[this.rear] = value;
    }
  }

  dequeue() {
    let value;
    if (this.front === this.rear) {
      console.log("queue underflow");
      this.front = this.rear = -1;
    } else {
      value = this.queue[this.front];
      this.front++;
    }
    return value;
  }

  lookup() {
    if (this.rear === -1) console.log("queue underflow");
    else {
      for (let i = this.front; i <= this.rear; i++) console.log(this.queue[i]);
    }
  }
}

const queue = new Queue(5);
queue.enqueue(20);
queue.enqueue(5);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(20);
