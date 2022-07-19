//When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

function switchItUp(number){
    if(number == '0'){
      return 'Zero'
    }else if(number == '1'){
      return 'One'
    }else if(number == '2'){
      return 'Two'
    }else if(number == '3'){
      return 'Three'
    }else if(number == '4'){
      return 'Four'
    }else if(number == '5'){
      return 'Five'
    }else if(number == '6'){
      return 'Six'
    }else if(number == '7'){
      return 'Seven'
    }else if(number == '8'){
      return 'Eight'
    }else if(number == '9'){
      return 'Nine'
    }
    }
    
    switchItUp(3)
    switchItUp(4)
    switchItUp(1)
    
    //P - parameter is a number
    //R - return a word
    //E - example '1' = 'one'
    //P - check the number and return corresponding word