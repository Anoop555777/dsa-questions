class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepand(value) {
    const node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }
  append(value) {
    const node = new Node(value);
    if (!this.tail) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insert(index, value) {
    if (index === 0) this.prepand(value);
    else if (index > this.length) this.append(value);
    else {
      const node = new Node(value);
      let currentNode;
      if (index < this.length / 2) {
        currentNode = this.head;
        for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;

        node.prev = currentNode;
        node.next = currentNode.next;
        currentNode.next.prev = node;
        currentNode.next = node;
      } else {
        currentNode = this.tail;
        for (let i = this.length - 1; i > index; i--)
          currentNode = currentNode.prev;

        node.next = currentNode;
        node.prev = currentNode.prev;
        currentNode.prev.next = node;
        currentNode.prev = node;
      }
      this.length++;
    }
  }

  printList() {
    const array = [];
    let node = this.head;

    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    console.log(array);
  }

  delete(index) {
    if (index > this.length - 1) return;
    else {
      if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (index === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        let currentNode;
        if (index < this.length / 2) {
          currentNode = this.head;
          for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;

          currentNode.next = currentNode.next.next;
          currentNode.next.prev = currentNode;
        } else {
          currentNode = this.tail;
          for (let i = this.length - 1; i > index + 1; i--)
            currentNode = currentNode.prev;

          currentNode.prev = currentNode.prev.prev;
          currentNode.prev.next = currentNode;
        }
      }
    }
    this.length--;
  }

  printReverseList() {
    const array = [];
    let node = this.tail;

    while (node !== null) {
      array.push(node.value);
      node = node.left;
    }
    console.log(array);
  }
}

const dl = new DoublyLinkedList();
dl.append(2);
dl.append(4);
dl.append(6);
dl.insert(2, 5);
dl.delete(2);

dl.printList();
