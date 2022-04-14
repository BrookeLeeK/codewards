// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
    return b.toString()
  }





//   It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    let totalMarks = marks.length //first get how many marks total
    let total = marks.reduce( (a, c) => c+a,0) //add all numbers together
    return Math.floor(total/totalMarks) //divide total of nums by number of marks and then use Math.floor to found down to nearest integer
  }