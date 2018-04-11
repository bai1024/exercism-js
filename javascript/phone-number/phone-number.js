class SpaceAge {
  constructor(num) {
    this.num = num
  }
  number(){
      var result = this.num.match(/(\d+)/g).join('')
      return result.length < 10 ? null : result
  }
}

module.exports = SpaceAge