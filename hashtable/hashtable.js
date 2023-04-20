class Hash {
  constructor(size) {
    this.data = new Array(size);
  }

  #hash(key) {
    const PRIME_NUMBER = 21;
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i) * i * PRIME_NUMBER) % this.data.length;
    }
    return total;
  }

  set(key, value) {
    const address = this.#hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
  }
  get(key) {
    let value;
    const address = this.#hash(key);
    if (!this.data[address]) return;
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) value = this.data[address][i][1];
    }
    return value;
  }

  getAllValues() {
    return this.data.flat(1).map((el) => el[1]);
  }

  getAllKeys() {
    return this.data.flat(1).map((el) => el[0]);
  }
}

const hash = new Hash(50);
hash.set("pink", 23);
hash.set("purple", 43);
hash.set("Pink", 5);
hash.set("pin", 1);
console.log(hash.getAllValues());
console.log(hash.getAllKeys());
