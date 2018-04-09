
var ArmstrongNumber = {
		validate:function(num){
			let temp = num
		  let sum = 0;
			let length = num.toString().length
			while (num) {
		    sum += Math.pow(num % 10,length);
		    num = Math.floor(num / 10);
			}
			return sum === temp
		},
};

module.exports = ArmstrongNumber;
