class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) this.root = node;
    else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value < value) {
          if (currentNode.right === null) {
            currentNode.right = node;
            return;
          }
          currentNode = currentNode.right;
        } else if (currentNode.value > value) {
          if (currentNode.left === null) {
            currentNode.left = node;
            return;
          }
          currentNode = currentNode.left;
        } else if (value === currentNode.value) return;
      }
    }
  }

  lookup(value) {
    if (!this.root) return;

    if (this.root.value === value) {
      console.log("found" + value);
    } else {
      let currentNode = this.root;
      while (currentNode.right === null && currentNode.left === null) {
        if (currentNode.value > value) currentNode = currentNode.left;
        else if (currentNode.value < value) currentNode = currentNode.right;
        else if (currentNode.value === value) {
          console.log("found" + value);
          return;
        }
      }
    }
    console.log("not found" + value);
  }
}

const bst = new BST();
