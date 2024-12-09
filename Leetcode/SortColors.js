const sortColors = (colors) => {
  let left = 0;
  let current = 0;
  let right = colors.length - 1;

  while(current <= right) {
    if(colors[current] === 0) {
      // if current element is 0, swap colors[current] and colors[left] and increment both left and current by 1
      [colors[current], colors[left]] = [colors[left], colors[current]];
      left++;
      current++;
    } else if(colors[current] === 2) {
      // if current element is 2, swap colors[current] and colors[right] and decrement only right by 1
      // DONT CHANGE CURRENT SINCE IT HAS TO BE ANALYZED AGAIN IF ANY FURTHER SWAPPING IS REQUIRED OR NOT
      [colors[current], colors[right]] = [colors[right], colors[current]];
      right--;
    } else {
      // if current element is 1, just increment current by 1
      current++;
    }
  }

  return colors;
  
}
