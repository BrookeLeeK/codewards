//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let arr = url.split('')
    arr.map(x => {
      if(x == '#'){
        let num = arr.indexOf(x)
        arr.splice(num)
      }
    })
    return arr.join('')
  }
  
  
  //P - one string
  //R - return a string of the remaining piece of the first string
  //E - "www.codewars.com#about" --> "www.codewars.com"
  //P - split the string, then go through the array and for each letter, if it == #, delete from that element and beyond, return whats left
  
  removeUrlAnchor("www.codewars.com#about") // should return "www.codewars.com"
  removeUrlAnchor("www.codewars.com?page=1") //should return "www.codewars.com?page=1"