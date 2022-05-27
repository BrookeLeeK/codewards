//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 ===0
    })
  }
  
  
  //filter through the array and if index is even, keep the element
  
  removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Hello Again'])//should return [ 'Hello', 'Hello Again' ]