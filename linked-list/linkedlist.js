class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  toArray() {
    const nodeLists = [];

    let currentNode = this.head;
    while (currentNode) {
      nodeLists.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodeLists;
  }
}

const newList = new LinkedList();
newList.append("shaikh");
newList.append("second");
newList.append("third");
newList.append(45.9);
newList.prepend("should appear first");
console.log("list before deleting : -> ", newList.toArray());

const itemToBeDeleted = "third";
newList.delete(itemToBeDeleted);

console.log(
  `list after deleted the element : ${itemToBeDeleted} -> `,
  newList.toArray()
);

console.log("finding deleted element in node ", newList.find('third'));


console.log("finding existing element in node ", newList.find('shaikh'));
