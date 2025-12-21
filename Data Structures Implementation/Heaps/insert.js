function getParentPositionIndex(childIndex) {

  return Math.floor((childIndex-1)/2);
}

function insert(val) {

  const heapArr = this;

  // add element at the end of array
  heapArr.push(val);

  // position of element inserted
  let i = heapArr.length - 1;

  while(i > 0 && heapArr[i] > heapArr[getParentPositionIndex(i)]) {

    // swap child and parent values
    const temp = heapArr[i];
    heapArr[i] = heapArr[getParentPositionIndex(i)];
    heapArr[getParentPositionIndex(i)] = temp;

    i = getParentPositionIndex(i);
    
  }
  
}
