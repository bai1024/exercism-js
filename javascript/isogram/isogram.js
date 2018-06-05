class Isogram {
  constructor(input){
    this.input = input.toLowerCase().replace(/-|_|\s/ig, '').split('')
  }

  isIsogram() {
    return this.input.length === this.input.filter((char, i, array) => array.indexOf(char) === i).length
  }
}

module.exports = Isogram;