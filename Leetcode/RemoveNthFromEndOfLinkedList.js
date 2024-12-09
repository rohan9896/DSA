import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

function removeNthLastNode(head, n) {
    
    // Step 1 - initialize leftPtr and rightPtr to be pointed at head node
    // Step 2 - move rightPtr by n steps
    // Step 3 - if rightPtr reaches at null, then the node to be removed is head, so we will simply return head.next
    // Step 4 - Now move both leftPtr and rightPtr forward until rightPtr.next !== null
    // Step 5 - By this step, leftPtr will be pointing at the node just before the node to be removed
    // Step 6 - Now remove the node to be removed by leftPtr.next = leftPtr.next.next;
    
    let leftPtr = head;
    let rightPtr = head;

    // Move right pointer n steps forward
    while(n > 0) {
      
      rightPtr = rightPtr.next;
      
      n--;
    }

    // if this condition is true, that means the node to be removed is head
    if(rightPtr === null) {
      return head.next;
    }

    // Move forward left and right until right reaches at the end
    while(rightPtr.next !== null) {
      rightPtr = rightPtr.next;
      leftPtr = leftPtr.next;
    }

    // Now left pointer is at position just before the element to be removed
    leftPtr.next = leftPtr.next.next;
        
        
    return head;  
}

export { removeNthLastNode };
