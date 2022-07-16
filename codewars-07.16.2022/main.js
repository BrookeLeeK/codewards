//Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {
    if(old < 14){
      return 'drink toddy'
    }else if(old >= 14 && old <18) {
      return 'drink coke'
    }else if(old >=18 && old < 21){
      return 'drink beer'
    }else{
      return 'drink whiskey'
    }
  };
  
  peopleWithAgeDrink(21)  //'drink whiskey'
  
  //P - parameter is a number
  //R - return a string based off the number
  //E - if the number is less than 14, 'drink toddy'
  //P - create a conditionla that determines if the age is a kid, teen, young adult, or adult and return what they drink