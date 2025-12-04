class Node {

  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  
}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAtEnd(data) {

    const newNode = new Node(data);

    // empty list case
    if(this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;

    newNode.prev = this.tail;

    this.tail = newNode;
    
  }

  addAtStart(data) {

    const newNode = new Node(data);

    // empty list case
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // attach head to next of newNode
    newNode.next = this.head;
    // attach prev of head to newNode
    this.head.prev = newNode;

    // Mark newNode as new head
    this.head = newNode;
    
  }

  deleteFromEnd() {

    // empty list case
    if(this.tail === null) {
      return;
    }

    // single node case
    if(this.tail.prev === null) {

      this.head = null;
      this.tail = null;
      return;
      
    }

    const lastSecondNode = this.tail.prev;

    this.tail.prev = null;
    lastSecondNode.next = null;

    this.tail = lastSecondNode;
    
  }

  deleteFromStart() {

    // empty list case
    if(this.head === null) {
      return;
    }

    // single node case
    if(this.head.next === null) {

      this.head = null;
      this.tail = null;
      return;
      
    }

    const secondNode = this.head.next;

    this.head.next = null;
    secondNode.prev = null;

    this.head = secondNode;

    
  }
  
}
