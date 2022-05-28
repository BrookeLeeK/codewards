//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending){
    let second = ending.split('').reverse().join('')
    let num = ending.length
    let first = str.split('').reverse().splice(0,num).join('')
    if(second == first){
      return true
    }else{
      return false
    }
  }
  
  solution('abcde', 'abc') // should return false
  solution('abcde', 'cde') // should return true
  
  //P - has two strings
  //R - return true or false
  //E - 'abcde', 'cde' true
  //P - reverse both strings, splice the first str to the length of the second, and check if each elements are the same 