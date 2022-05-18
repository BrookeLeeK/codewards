//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.


//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.


function feast(beast, dish) {
    const beasts = beast.split('')
    const dishes = dish.split('')
    if(beasts[0] == dishes[0] && beasts[beasts.length-1] == dishes[dishes.length-1]){
      return true
    }else{
      return false
    }
    }
    
    //if the first letters of the beast & dish match along with the last letters, return true, otherwise return false
    
    feast("great blue heron", "garlic naan") //true
    feast("brown bear", "bear claw") //false