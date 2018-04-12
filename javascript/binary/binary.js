class SpaceAge {
  constructor(num) {
    this.num = /[^01]/.test(num) ? "0": num
  }
  toDecimal(){
    let arr = Array.from(this.num.toString()).map(Number);
    let result = 0
    let exponent = arr.length - 1
    for(var i = 0;i < arr.length;i++){
        result += arr[i] * Math.pow(2,exponent)
        exponent--
      }
    return result
  }
}

module.exports = SpaceAge
