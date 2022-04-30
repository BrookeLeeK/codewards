// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arr = numbers.split(' ')  
    let sorted = arr.sort((a, b) => a-b)
    return `${sorted[sorted.length-1]} ${sorted[0]}`
    }


//     Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    let arr = string.split(' ')
    let newArr = arr.map( x=> {
      if(x.split('').length>4){
        return x.split('').reverse().join('')
      }else{
        return x
      }
    })
    return newArr.join(' ')
  }