// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

function humanYearsCatYearsDogYears(humanYears) {
    if(humanYears == 1){
      return [1, 15, 15]
    }else if(humanYears == 2){
      return [2, 24, 24]
    }else if(humanYears == 3){
      return [3, 28, 29]
    }else{
      let catPlus = ((humanYears-3)*4) + 28
      let dogPlus = ((humanYears-3)*5) + 29
      return [humanYears, catPlus, dogPlus]
    }
  }
  
  humanYearsCatYearsDogYears(9)
  
  
  
  
  
  
  //P - takes a Number (human years)
  //R - returns a Number [humanYears, catYears, dogYears]
  //E - humanYearsCatYearsDogYears(2) // should return [2, 24, 24]
  //P - Take a the number if 1, return 15 (for both), if 2 return 24 (for both), if 3 return 28 for cat, 29 for dog, and 3 for human, if 3> keep adding 4 for cat and 5 for dog 