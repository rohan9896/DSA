class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addAtStart(data) {
    const newNode = new Node(data);

    if(!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  addAtEnd(data) {

    const newNode = new Node(data);

    if(!this.head) {
      this.head = newNode;
      return;
    }
    
    // Go to the last node
    let curr = this.head;

    while(curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
    
  }

  removeFromStart() {

    if(!this.head) {
      throw Error('Linkedlist is already empty');
    }

    this.head = this.head.next;

  }

  removeFromEnd() {

    // empty list
    if(!this.head) {
      throw Error('Linkedlist is already empty');
    }

    // single node list
    if(this.head.next === null) {
      this.head = null;
      return;
    }

    

    let curr = this.head;

    // go to last second node
    while(curr.next.next !== null) {
      curr = curr.next;
    }

    // make that last second node as tail node
    curr.next = null;
    
  }
  
}
