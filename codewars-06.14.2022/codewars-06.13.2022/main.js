//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }
  
  nameShuffler('John Doe')
  
  
  
  //P - parameter is a string with two names
  //R - return the two names swapped
  //E - 'John doe' would be 'doe John'
  //P - split the string into an array of 2, reverse them, return as a joined string