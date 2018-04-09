var SpaceAge = function (seconds) {
	this.seconds = seconds
};
SpaceAge.prototype.onEarth = function () {
	let year = this.seconds / 60 /60 / 24 / 365.25
	return Math.round(year * 100) / 100
};
SpaceAge.prototype.onMercury = function () {
	let earthYear = SpaceAge.onEarth;
	return Math.round(earthYear * 100 / 100)

};
SpaceAge.prototype.onVenus = function () {

};
SpaceAge.prototype.onMars = function () {

};
SpaceAge.prototype.onJupiter = function () {

};
SpaceAge.prototype.onSaturn = function () {

};
SpaceAge.prototype.onUranus = function () {

};
SpaceAge.prototype.onNeptune = function () {

};

module.exports = SpaceAge;
