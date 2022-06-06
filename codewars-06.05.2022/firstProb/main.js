//Your task is correct the errors in the digitised text. You only have to handle the following mistakes: 
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1


function correct(string){
	arr = string.split('');
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === '5') arr[i] = 'S';
    else if(arr[i] === '1') arr[i] = 'I';
    else if(arr[i] === '0') arr[i] = 'O'
  }
  return arr.join('')
}


correct('1F-RUDYARD K1PL1NG')
correct('L0ND0N')


//P - parameter is a string
//R - return another string (corrected)
//E - example "L0ND0N" would be "LONDON"
//P - split the string given, go through each letter in the array and if its a 5 change to S, if 0 change to O, if 1 change to I, join the array and return string