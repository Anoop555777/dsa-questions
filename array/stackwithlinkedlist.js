class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    let pop;
    if (!this.top) console.log("stack underflow");
    else {
      pop = this.top.value;
      this.top = this.top.next;
      this.size--;
    }
    return pop;
  }

  peek() {
    if (!this.top) console.log("stack underflow");
    else console.log("peek" + this.top.value);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
stack.peek();
