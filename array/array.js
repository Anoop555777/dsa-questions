class Arrays {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    debugger;
    if (this.length - 1 < index) return;
    for (let i = index; i <= this.length - 1; i++)
      this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    if (!this.length) return;
    for (let i = 1; i < this.length - 1; i++) this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(value) {
    for (let i = this.length - 1; i >= 0; i--) this.data[i + 1] = this.data[i];
    this.data[0] = value;
    this.length++;
  }
  insert(value, index) {
    if (this.length - 1 < index) this.data[this.length] = value;
    else {
      for (let i = this.length - 1; i >= index; i--)
        this.data[i + 1] = this.data[i];
      this.data[index] = value;
    }

    this.length++;
  }

  show() {
    process.stdout.write("[");
    for (let i = 0; i < this.length; i++)
      process.stdout.write(this.data[i] + ",");
    console.log("]");
  }

  flat(array) {
    const num = [];

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        num.push(...this.flat(array[i]));
      } else {
        num.push(array[i]);
      }
    }
    return num;
  }
}

const arr = new Arrays();
arr.push(2);
arr.push(3);
arr.push(4);
arr.pop();
arr.insert(5, 0);
arr.unshift(1);
arr.unshift(2);
arr.delete(1);
console.log(arr.flat([1, 2, 3, [4, 5, [5, 6]]]));
arr.show();
