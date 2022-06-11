//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    const arr = str.toLowerCase().split('')
    let x = []
    let o = []
    let newArr = arr.map(y => {
      if(y == 'x'){
        x.push(y)
      }else if(y == 'o'){
        o.push(y)
      }
    })
    if(x.length == 0 && o.length == 0){
      return true
    }else if(x.length == o.length){
      return true
    }else{
      return false
    }
}


XO('xoxo') //should return true
XO('xxo') //should return false
XO('lkjhgfd') //should return true

//P - parameter is a string 
//R - return a boolean 
//E - 'xxoo' return true, 'kjkjkh' returns true, 'oooxx' returns false
//P - split the string into an array, go through the array and if a letter is x or o push an integer into an new array for each. If the length of both are equal, return true, else return false, or if both are empty return true