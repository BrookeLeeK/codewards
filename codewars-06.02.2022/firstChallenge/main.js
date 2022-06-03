// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if(month <= 3){
      return 1
    }else if(month > 3 && month <=6){
      return 2
    }else if(month > 6 && month <= 9){
      return 3
    }else{
      return 4
    }
  }
  
  quarterOf(2) // should return 1
  quarterOf(9) // should return 3
  
  
  //P - Given a number as parameter (month)
  //R - return anothe rnumber (quarter)
  //E - for example, the month of february (2) would be in the first (1) quarter of the year
  //create a conditional to figure out if the month is between 1-3, 4-6, 7-9, and 10-12