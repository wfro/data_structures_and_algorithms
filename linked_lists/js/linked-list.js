class LinkedList {
  constructor() {
    this.head = null;
  }

  count() {
    let counter = 0;

    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.last().next = node;
    }
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      const data = this.head.data;
      this.head.next = null;
      return data;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const data = currentNode.next.data;
    currentNode.next = null;
    return data;
  }

  toArray() {
    if (!this.head) {
      return [];
    }

    const a = [];
    let currentNode = this.head;

    while (currentNode) {
      a.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return a;
  }

  last() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  includes(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  insert(targetIndex, data) {
    const newNode = new Node(data);
    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (index === targetIndex - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }

      index++;
      currentNode = currentNode.next;
    }
  }

  insertAfter(existingData, newData) {
    const newNode = new Node(newData);
    let currentNode = this.head;

    const node = this.find(existingData);
    newNode.next = node.next;
    node.next = newNode;
  }

  index(data) {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return i;
      }

      i++;
      currentNode = currentNode.next;
    }
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export {
  Node,
  LinkedList,
};
