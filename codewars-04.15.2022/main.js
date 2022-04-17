// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    var vowelsCount = 0;
    let arr = str.split('');
    arr.forEach( x => {
      if(x == 'a' || x=='e' || x=='i'||x=='o'||x=='u'){
        return vowelsCount +=1
      }
    })  
    return vowelsCount;
  }


//   Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
	return s.repeat(n)
}


//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples

function setAlarm(employed, vacation){
    if(employed == true && vacation == false){
      return true
    }else{
      return false
    }
  
  }