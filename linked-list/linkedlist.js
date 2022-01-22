class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = this.createNewNodeObject(value); 

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = this.createNewNodeObject(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = this.createNewNodeObject(value, existingNode.next);
      existingNode.next = newNode;
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

  createNewNodeObject(value, next = null) {
    return {
      value,
      next,
    };
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

console.log("finding deleted element in node ", newList.find("third"));

console.log("finding existing element in node ", newList.find("shaikh"));

newList.insertAfter("alamin", "shaikh");
console.log("inserting after a element shaikh", newList.toArray());
