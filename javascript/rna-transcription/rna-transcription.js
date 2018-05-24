const mapObj = {
  C:"G",
  G:"C",
  A:"U",
  T:"A"
}

class DnaTranscriber {
  toRna(str) {
    return str.replace(/./g, (letter) => {
      if (!(letter in mapObj)) { throw new Error("Invalid input") }
      return mapObj[letter]
    })
  }
}

module.exports = DnaTranscriber;
