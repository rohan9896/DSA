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



export {
    reverseWordsUsingStack
}
