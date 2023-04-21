class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rare = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) this.front = this.rare = node;
    else {
      this.rare.next = node;
      this.rare = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) return;
    console.log("dequeue" + this.front.value);
    this.front = this.front.next;
    this.size--;
  }

  peek() {
    if (!this.front) console.log("queue is  empty ");
    else console.log("peek " + this.front.value);
  }
}

const queue = new Queue();
queue.enqueue(20);
queue.dequeue();
queue.enqueue(5);
queue.peek();
queue.enqueue(20);
queue.dequeue();
queue.peek();
