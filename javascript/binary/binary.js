class Binary {
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

module.exports = Binary

//better solution
// toDecimal(){
// 	return this.num.split('').reverse().reduce(function(x, y, i){
//     return (y === '1') ? x + Math.pow(2, i) : x;
//   }, 0);
// }