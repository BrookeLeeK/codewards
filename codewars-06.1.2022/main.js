//Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).



function twiceAsOld(dadYearsOld, sonYearsOld) {
    let difference = sonYearsOld * 2
    if(dadYearsOld > difference){
      return dadYearsOld - difference
    }else if(dadYearsOld < difference){
      return difference - dadYearsOld
    }else{
      return 0
    }
  }
  
  
  twiceAsOld(36, 7) //22
  twiceAsOld(55, 30) //5
  
  
  //P - two numbers, both wil always be greater than 0? 
  //R - return a number
  //E - twiceAsOld(36, 7) // should return 22
  //P - create a variable that hold sonYearsOld * 2, if dadYears old is greater, then subtract the variable from dads age and return that number. If its smaller, do the opposite and return that number