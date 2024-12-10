// Brute force using Stack
function reverseWordsUsingStack(sentence) {

    // Replace this placeholder return statement with your code
    const sentanceSplitArr = sentence.split(' ');
    let sentanceStack = [];
    
    for(let i=0;i<sentanceSplitArr.length;i++) {
      sentanceStack.push(sentanceSplitArr[i]);
    }
    
    sentanceStack = sentanceStack.filter(item => Boolean(item))
    
    let reversedSentence = '';
    
    while(sentanceStack.length > 0) {
      reversedSentence += sentanceStack.pop() + " ";
    }
    
    
    return reversedSentence.trim();
}

// Reverse words using 2 pointers
function reverseWords(sentence) {
  let reversedSentenceArray = sentence.trim().replace(/\s+/g, " ").split('').reverse().filter(item => Boolean(item));
  
  let leftPointer = 0;
  let rightPointer = 0;
  
  while(rightPointer <= reversedSentenceArray.length - 1) {
    
    while(rightPointer < reversedSentenceArray.length && reversedSentenceArray[rightPointer] !== ' ') {
      rightPointer++;
    }
    
    let start = leftPointer;
    let end = rightPointer - 1;
    
    while(start <= end) {
      const temp = reversedSentenceArray[start];
      reversedSentenceArray[start] = reversedSentenceArray[end];
      reversedSentenceArray[end] = temp;
      
      start++
      end--;
      
    }
    
    // Now set leftPointer and rightPointer to next non-space alphabet
    while(reversedSentenceArray[rightPointer] === ' ') {
      rightPointer++;
    }
    
    leftPointer = rightPointer;
  }
  
  return reversedSentenceArray.join(''); 
}

export {
    reverseWordsUsingStack
}
