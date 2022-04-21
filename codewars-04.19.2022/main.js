// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let arr = x.split('');
      let newArr = arr.map( i => {
      if(i<5){
        return '0'
      }else{
        return '1'
      }
    })
    return newArr.join('')
  }



//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arrayOfSheep) {
    let total = [];
    for(let i=0; i<arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == true){
        total.push([1])
          }
    }
    return total.length
  }




//   The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.


function openOrSenior(data){
    let newArr = data.map(function(x){
      if(x[0]>=55 && x[1] > 7){
        return "Senior"
      }else{
        return "Open"
      }
    })
    return newArr
  }




  //Write a function which calculates the average of the numbers in a given list. i

  function find_average(array) {
    let total = array.reduce( (acc, curr) => acc+curr, 0)/array.length 
    if(array.length == 0){
      return 0
    }else{
      return total
    }
  }


//   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    let nums = num.toString().split('')
    let sqr = nums.map(x => Math.pow(x, 2))
    let final = sqr.join('')
    return Number(final)
  }

