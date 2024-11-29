export function findSumOfThree(nums, target) {
    
    const sortedArr = nums.sort((a, b) => a-b);
    
    
    for(let i=0;i<sortedArr.length - 2;i++) {
      
      const currentElement = sortedArr[i];
      
      let leftPointerIdx = i+1;
      let rightPointerIdx = sortedArr.length -1;
      
      while(leftPointerIdx < rightPointerIdx) {
        if(sortedArr[leftPointerIdx] + sortedArr[rightPointerIdx] === target - currentElement) {
          return true;
        }
        
        if(sortedArr[leftPointerIdx] + sortedArr[rightPointerIdx] < target - currentElement) {
          leftPointerIdx++;
        } else {
          rightPointerIdx--;
        }
        
      }
      
    }
    
    return false
}
