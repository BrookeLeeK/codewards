//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
    let dupe = []
    let total = []
    let arr = text.toLowerCase().split('')     
    arr.forEach(x => {   //with the array split up, find out if for each given element, the first index of it is the same as the lastindex of it
      if(arr.indexOf(x) !== arr.lastIndexOf(x)){
        dupe.push(x)
      }
    })
    let sorted = dupe.sort() //sort the array of duplicate elements
    
    for(let i = 0; i<sorted.length; i++){
      if(sorted[i] !== sorted[i+1]){
        total.push(1)
      }
    }
    //last find out how many times each element is in the array
    return total.length
  }

