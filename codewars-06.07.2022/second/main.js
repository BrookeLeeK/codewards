//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
	let caps = []
  let arr = word.split('')
  arr.map(x => {
    if(x == x.toUpperCase()){
      caps.push(arr.indexOf(x))
    }
  })
  return caps
};

capitals('CodEWaRs')


//P = parameter is a string
//R - return an array of number
//E - 'CodEWaRs' => [0, 3, 4, 6]
//P - split the string, filter through the array if the letter == letter.toUpperCase(), return the index of the letter in a new array then return the new array