//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    arr = s.split('');
    let final = [];
    let num = arr.length;
    if(num%2 == 0){
      let i = arr[num/2]
      let x = arr[(num/2)-1]
      final.push(x)
      final.push(i)
      return final.join('')
    }else{
      let i = (num-1)/2
      return arr[i]
    }
  }
  
  getMiddle('test') // should return 'es'
  getMiddle('testing') //should return 't'
  getMiddle('middle') // should return 'dd'
  
  
  //P - parameter is a string
  //R - return middle character as a string
  //E - 'test' would return 'es'
  //P - split the string, take the length of the array, if its even then divide the number in half and return the arr[number] and arr[number+1], if its odd just take the array length, subtract one, and return that number divided by two's index of the array