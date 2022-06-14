// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    let arr = dna.split('')
    let RNA = arr.map(x => x == 'T' ? 'U' : x)
    return RNA.join('')
  }
  
  DNAtoRNA('GCAT') // should return 'GCAU'
  
  //P - parameter is a string
  //R - return another string
  //E - 'GCAT' = 'GCAU'
  //P - loop through each letter in the dna, if its a 't' return 'u', join together the finished string and return 