//Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


//solution:

function maps(x){
    let arr = x.map(x => x*=2)
    return arr
  }



//   Description:
// Make a simple function called greet that returns the most-famous "hello world!".

function greet(){
    return 'hello world!'
  }



//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//original:

function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }

//corrected solution:

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }else{
      return "Hello, " + name + "!";
    }
  }


