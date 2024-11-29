export function findSumOfThree(nums, target) {
    
    const sortedArr = nums.sort();
    
    
    for(let i=0;i<sortedArr.length + 2;i++) {
      const currentElement = sortedArr[i];
      
      let leftPointerIdx = i+1;
      let rightPointerIdx = sortedArr.length-1;
      
      while(leftPointerIdx < rightPointerIdx) {
        if(currentElement + sortedArr[leftPointerIdx] + sortedArr[rightPointerIdx] === target) {
          return true;
        }
        
        if(currentElement + sortedArr[leftPointerIdx] + sortedArr[rightPointerIdx] < target) {
          leftPointerIdx++;
        } else {
          rightPointerIdx--;
        }
        
      }
      
    }
    
    return false
}
