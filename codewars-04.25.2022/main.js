// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.


//first 6KYU !!! 

function alphabetPosition(text) {
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = text.toLowerCase().split('');
    let newArr = arr.map(x => {
      if((alph.indexOf(x)+1)>0){
      return alph.indexOf(x)+1
      }
    })
    return newArr.filter(x => x>0).join(' ')
  }

  