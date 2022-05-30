// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.


// write the function isAnagram
function isAnagram(test, original) {
    first = test.toLowerCase().split('').sort().join('')
    second = original.toLowerCase().split('').sort().join('')
    if(first !== second){
      return false
    }else{
      return true
    }
           
    }
  
  
  
  //P - two strings
  //R - true or false
  //E - "Foefet", "toFfee" both anagrams
  //P - sort each string after making lower case, splitting, and joining back together. If they are the same return true, else return false
  
  
  isAnagram("Foefet", "toFfee")  //should return true
  isAnagram("dumble", "bumble") //should return false