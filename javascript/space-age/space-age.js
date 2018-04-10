var SpaceAge = function (seconds) {
	this.seconds = seconds
};

SpaceAge.prototype.round = function(time){
	return Math.round(time * 100) / 100
}
SpaceAge.prototype.orbitalPeriod = function(year) {
    return year * 31557600
}
SpaceAge.prototype.onEarth = function () {
	return this.round(this.seconds / 31557600,2)
};
SpaceAge.prototype.onMercury = function () {
	 return this.round(this.seconds / this.orbitalPeriod(0.2408467))
};
SpaceAge.prototype.onVenus = function () {
	return this.round(this.seconds / this.orbitalPeriod(0.61519726))
};
SpaceAge.prototype.onMars = function () {
	return this.round(this.seconds / this.orbitalPeriod(1.8808158))
};
SpaceAge.prototype.onJupiter = function () {
	return this.round(this.seconds / this.orbitalPeriod(11.862615))
};
SpaceAge.prototype.onSaturn = function () {
	return this.round(this.seconds / this.orbitalPeriod(29.447498))
};
SpaceAge.prototype.onUranus = function () {
	return this.round(this.seconds / this.orbitalPeriod(84.016846))
};
SpaceAge.prototype.onNeptune = function () {
	return this.round(this.seconds / this.orbitalPeriod(164.79132))
};

module.exports = SpaceAge;
