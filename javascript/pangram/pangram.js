var Pangram = function (str) {
	this.str = str
};
Pangram.prototype.isPangram = function () {
	var temp = this.str.match(/[a-zA-Z]/gi)
	return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(temp)
};

module.exports = Pangram;
