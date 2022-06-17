//Given a string str, reverse it omitting all non-alphabetic characters.




function reverseLetter(str) {
    let arr = str.split('')
    let filtered = arr.filter(x => {    if(x.toLowerCase() =='a'||x.toLowerCase()=='b'||x.toLowerCase()=='c'||x.toLowerCase()=='d'||x.toLowerCase()=='e'||x.toLowerCase()=='f'||x.toLowerCase()=='g'||x.toLowerCase()=='h'||x.toLowerCase()=='i'||x.toLowerCase()=='j'||x.toLowerCase()=='k'||x.toLowerCase()=='l'||x.toLowerCase()=='m'||x.toLowerCase()=='n'||x.toLowerCase()=='o'||x.toLowerCase()=='p'||x.toLowerCase()=='q'||x.toLowerCase()=='r'||x.toLowerCase()=='s'||x.toLowerCase()=='t'||x.toLowerCase()=='u'||x.toLowerCase()=='v'||x.toLowerCase()=='w'||x.toLowerCase()=='x'||x.toLowerCase()=='y'||x.toLowerCase()=='z'){
      return x
    }
    })
    return filtered.reverse().join('')
  }
  
  reverseLetter('Abdcefg1hi9999') // 'ihgfecdbA'
  
  // P - parameter is a string containing letters and/or numbers
  // R - return the string reversed, minus non alphabet characters
  //E - example "krishan" would return 'nahsirk'
  // P - split the string, go through the array and create a new one of only letters, reverse it and return 