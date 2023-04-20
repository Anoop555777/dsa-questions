class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  append(value) {
    const node = new Node(value);
    if (!this.tail) this.tail = this.head = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insert(index, value) {
    if (index === 0) this.prepend(value);
    else if (index > this.length) this.append(value);
    else {
      let currentNode = this.head;
      const node = new Node(value);
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      node.next = currentNode.next;
      currentNode.next = node;
    }
    this.length++;
  }

  delete(index) {
    if (index > this.length) return;
    else if (index === 0) this.head = this.head.next;
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
    this.length--;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode != null) {
      process.stdout.write(currentNode.value + "->");
      currentNode = currentNode.next;
    }
  }

  reverse() {
    if (!this.head.next) return;
    else {
      let nextNode;
      this.tail = this.head;
      this.head = this.head.next;
      this.tail.next = null;
      let currentNode = this.tail;

      while (this.head != null) {
        nextNode = this.head;
        this.head = this.head.next;
        nextNode.next = currentNode;
        currentNode = nextNode;
      }
      this.head = nextNode;
      this.printList();
    }
  }
}

const linklist = new LinkedList();
linklist.append(2);
linklist.append(4);
linklist.append(5);
linklist.insert(1, 3);

linklist.reverse();
