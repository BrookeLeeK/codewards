// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if(flower1%2==0 && flower2%2!==0){
      return true
    }else if(flower1%2!==0 & flower2%2==0){
      return true
    }else{
      return false
    }
  }




  //Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge. Don't forget the space after the closing parentheses!

  function createPhoneNumber(numbers){
    let first = numbers.splice(0, 3).join('');
    let second = numbers.splice(0, 3).join('')
    let third = numbers.splice(0, 4).join('')
    return '('+ first +')' + ' ' + second + '-' + third
  }

  //You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    if(names.length == 0){
      return 'no one likes this'
    }else if(names.length == 1){
      return `${names[0]} likes this`
    }else if(names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }