import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

function removeNthLastNode(head, n) {

    // Replace this placeholder return statement with your code
    
    let left = head;
    let right = head;
    
    // Move right pointer n steps forward
    let i=0;
    while(i<n) {
      
      // if this condition is true, that means the node to be removed is head
      if(right.next === null) {
        head = head.next;
        return head;
      }
      right = right.next;
      i++;
    }
    
    // Move forward left and right until right reaches at the end
    while(right.next !== null) {
      left = left.next;
      right = right.next;
    }
    
    // Now left pointer is at position just before the element to be removed
    left.next = left.next.next;
    
    return head;  
}

export { removeNthLastNode };
