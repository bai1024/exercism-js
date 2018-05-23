class Binary {
  constructor(num) {
    this.num = /[^01]/.test(num) ? "0": num
  }

  toDecimal(){
    return this.num.split("").reverse().reduce((x, y, i)=>{
      return (y === "1") ? x + Math.pow(2, i) : x;
    }, 0);
  }
}

module.exports = Binary

