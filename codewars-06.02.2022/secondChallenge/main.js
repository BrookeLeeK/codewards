// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers){
    let even = []
    let odd = []
    integers.forEach(x => {
      if(x%2 == 0){
        even.push(x)
      }else{
        odd.push(x)
      }
    })
   if(even.length > odd.length){
     return Number(odd)
   }else{
     return Number(even)
   }
  }
  
  findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) //11
  findOutlier([160, 3, 1719, 19, 11, 13, -21]) //160
  
  
  //P - an array of numbers positive or negative
  //R - return one number, the odd man out
  //E - [2, 4, 0, 100, 4, 11, 2602, 36] should return 11 (the only odd number)
  //P - make two array, one positive and one negative. If positive.length is greater than negative.length then return the number in negative, else return the number in positive