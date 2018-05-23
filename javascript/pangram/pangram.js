class Pangram {
  constructor(str) {
    this.str = str.replace("_"," ").toLowerCase()
    this.strArr = this.str.split("")
  }

  isPangram() {
    const letterArr = "abcdefghijklmnopqrstuvwxyz".split("")
    return letterArr.every(letter => this.strArr.indexOf(letter) != -1)
  }
}

module.exports = Pangram
