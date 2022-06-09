// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3
    if(average >= 90){
      return 'A'
    }else if(average >= 80 && average < 90){
      return 'B'
    }else if(average >= 70 && average < 80){
      return 'C'
    }else if(average >= 60 && average < 70){
      return 'D'
    }else{
      return 'F'
    }
  }
  
  
  getGrade(95, 90, 93)
  
  
  //P - Parameters are 3 numbers
  //R - Return a letter
  //E - Example is (95, 90, 93) would return an A
  //P - Add the numbers together, divide them by 3, and if the number 90 or greater return A, if its between 80-89 returb B, 70 - 79 return C, 60-69 return D, and lower return F