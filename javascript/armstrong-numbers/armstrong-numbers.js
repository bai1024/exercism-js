var ArmstrongNumber = {
  validate:(num) => {
    let len = num.toString().split('').length
    let sum = num
              .toString()
              .split('')
              .map(e => Math.pow(e, len))
              .reduce(((sum, e) => sum += e))
    if (sum == num) return true
    else return false
  }
};

module.exports = ArmstrongNumber;
