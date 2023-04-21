class Stack {
  constructor(size) {
    this.data = new Array(size);
    this.length = size;
    this.top = -1;
  }

  push(value) {
    if (this.top === this.length - 1) console.log("stack overflow");
    else {
      this.top++;
      this.data[this.top] = value;
      this.length++;
    }
  }

  pop() {
    let pop;
    if (this.top === -1) return;
    pop = this.data[this.top];
    this.top--;
    this.length--;
    return pop;
  }

  peek() {
    if (this.top === -1) console.log("stack underflow");
    else if (this.top === this.length) console.log("stack overflow");
    else console.log("peek" + this.data[this.top]);
  }

  lookup() {
    if (this.top === -1) console.log("stack underflow");
    else {
      for (let i = this.top; i >= 0; i--) console.log(this.data[i]);
    }
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.pop();
stack.push(30);
stack.push(40);
stack.push(50);
stack.peek();
stack.lookup();
