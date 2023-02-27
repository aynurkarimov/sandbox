class List {
  constructor(head) {
    this.head = head;
  }

  add(newNode) {
    const latest = this.getLatest();
    latest.next = newNode;
  }

  clear() {
    this.head = null;
  }

  getLatest() {
    let latestNode = this.head;

    if (!latestNode) return null;

    while (latestNode.next) {
      latestNode = latestNode.next;
    }

    return latestNode
  }

  size() {
    let latest = this.head;
    let size = 0;

    while (latest) {
      latest = latest.next;
      size += 1;
    }

    return size
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node('im head');
const list = new List(head);

const node1 = new Node('first');
const node2 = new Node('second');

list.add(node1);
list.add(node2);

console.log('list', list.getLatest());