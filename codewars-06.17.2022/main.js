//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
    let animals = animal.toLowerCase()
    if(animals == 'alligator'){
      return 'small'
    }else{
      return 'wide'
    }
  }
  
  mouthSize('alligator') // 'small'
  mouthSize('toucan') //'wide'
  mouthSize('Alligator') //'small'
  
  //P - parameter is a string
  //R - return 'small' or 'wide'
  //E - if animal is alligator return small, else return 'wide'
  //P - see if the animal equal alligator, if yes then return small, else return wide