/*

What is a linked list?

- Contains a head, tail and length property.
- Linked lists consist of nodes, and each node has a value and a pointer.
- It's just nodes pointing ot each other. (connected to only ONE direction) https://visualgo.net/en/list
- LISTS - does not have indexes, connected via nodes with a next pointer, random access is not allowed
- ARRAYS - indexed in order, insert and delete can be expensive, can quickly be accessed at a specific index.

*/

// piece of data - val
// refrence to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Create a function that accepts a value. val = value
  push(val) {
    // Create a new node using the value passed to the function.
    let newNode = new Node(val);
    // If there is no head property on the list.
    if (!this.head) {
      // set the head and the tail to be the newly created now.
      this.head = newNode;
      this.tail = this.head;
    } else {
      // else set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment the length by one
    this.length++;
    return this; // This keyword refers to the list called at the bottom of this document.
  }
  pop() {
    // if there is no nodes in the list, return undefined.
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    // loop through the list until you reach the tail.
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set the next property of the 2nd to last node to be null.
    this.tail = newTail; // set the tail to be the 2nd to last node
    this.tail.next = null;
    this.length--; // decrement the legth of the list by 1
    if (this.length === 0) {
      // edge case
      this.head = null;
      this.tail = null;
    }
    return current; // return the value of the node removed
  }
  shift() {
    // if there is no nodes, return undefined or null which ever
    if (!this.head) return undefined;
    // store the current head property in a variable
    let currentHead = this.head;
    // set the head property to be the current head's next preoprty
    this.head = currentHead.next;
    this.length--; // decrement the length by 1
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead; // return the value of the node removed.
  }
  // The function should accept a value. val = value
  unshift(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list,
    if (!this.head) {
      // set the head and the tail to be the newly created node
      this.head = newNode;
      this.tail = this.head;
    }
    // else set the newly created node's next property to be the current head property on the list
    newNode.next = this.head;
    this.head = newNode;
    this.length++; // increment the length of the list by 1
    return this; // return the linked list (this keyword refers to the list at the bottom)
  }
  // this function should accept an index.
  get(index) {
    // if the index is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    // loop through the list until you reach the index and return the node at the specific index.
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // this function accepte and index and value. val = value
  set(index, val) {
    // make a function that finds the specific node
    let foundNode = this.get(index);
    //if node is found, set the value of that node to be the value passed to the function and return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // if node is not found, return false
    return false;
  }
  insert(index, val) {
    // function should have and index, value passed in. val = value.
    if (index < 0 || index > this.length) return false; // If the index is less than zero or greater than the length, return false.
    if (index === this.length) return !!this.push(val); // if the index is the same as the length, push a nde node to tehe end of the list.
    if (index === 0) return !!this.unshift(val); // if the index is 0, unshift a new node to the end of the list else,

    // using the GET method, access the node at the index - 1
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next; // set the next property on that node to be the new node.
    prev.next = newNode; // set the next property on the new node to be the previous node.
    newNode.next = temp;
    this.length++; // increment the length
    return true; // return true if its true
  }
  remove(index) {
    // function should have an index passed in
    if (index < 0 || index >= this.length) return undefined; // If the index is less than zero or greater than the length, return undefined.
    if (index === 0) return this.shift(); // if the index is === 0, shift
    if (index === this.length - 1) return this.pop(); // if the index is the same as the length-1, pop
    let previousNode = this.get(index - 1); // else using the GET method, access the node at the index - 1
    let removed = previousNode.next; // set the next property on the node to be the next of the next node
    previousNode.next = removed.next;
    this.length--; // decrement the length
    return removed; // return the value of the node removed
  }
  reverse() {
    // swap the head and the tail
    // create a variable called next.
    // create a variable called prev.
    // create a variable node and initialize it to the head property

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    // loop through the list
    for (let i = 0; i < this.length; i++) {
      // set the next to be the property on whatever the node is
      // set the next property on the node to be whatever prev is
      // set prev to be the value of the node variable
      // set the node variable to be the value of the next variable
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

// let first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')
