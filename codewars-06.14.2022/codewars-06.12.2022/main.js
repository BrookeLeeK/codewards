//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const arr = s.split('')
    let newArr = arr.filter(x => {
      return x !== '!'
    })
    return newArr.join('')
  }
  
  removeExclamationMarks('Hello!! World!!')
  
  
  //P - parameter is a string
  //R - return a string without the !
  //E - 'Hello world!' would be 'Hello world'
  //P - split the string, map the array and return everything that is not an !, join new array