type LinkedList = {
  size: () => number;
  head: () => any;
  tail: () => any;
  prepend: (value: any) => void;
  append: (value: any) => void;
  at: (index: number) => any;
  pop: () => void;
  contains: (value: any) => boolean;
  find: (value: any) => number;
  toString: () => string;
};

function LinkList(this: LinkedList) {
  let length: number = 0;
  let head: any = null;
  let tail: any = null;

  let Node = function (this: any, value: any) {
    this.value = value;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.tail = function () {
    return tail;
  };

  this.prepend = function (value: any) {
    let node: any = new (Node as any)(value);
    if (head === null) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    length++;
  };

  this.append = function (value: any) {
    let node: any = new (Node as any)(value);
    let currentNode;
    if (head === null) {
      head = node;
    } else {
      currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.at = function (index: number) {
    let count = 0;
    let currentNode = this.head();

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  };

  this.pop = function () {
    let currentNode = this.head();
    let newTail = this.tail();

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    if (newTail !== null) {
      newTail.next = null;
    }
    length--;
  };

  this.contains = function (value: any) {
    let currentNode = head;

    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      return true;
    }
    return false;
  };

  this.find = function (value: any) {
    let currentNode = head;
    let index = 0;

    while (currentNode.next) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    if (currentNode.value === value) {
      return index;
    }

    return -1;
  };

  this.toString = function () {
    let currentNode = head;
    let string = "";

    while (currentNode.next) {
      string += currentNode.value + " -> ";
      currentNode = currentNode.next;
    }

    return (string += currentNode.value);
  };
}

const myList = new (LinkList as any)();

myList.append(5);
myList.append(10);
myList.prepend(15);

console.log(myList.toString()); // 15 -> 5 -> 10
console.log(myList.size()); // 3
console.log(myList.at(2).value); // 10

myList.pop();
console.log(myList.toString()); // 15 -> 5

console.log(myList.contains(5)); // true

console.log(myList.find(10)); // -1

