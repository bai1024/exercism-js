
var BeerSong = function () {};

BeerSong.prototype.verse = function(num){
	if(num === 0){
		return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
	} else {
			return  `${num} ${num === 1 ? 'bottle' : 'bottles'} of beer on the wall, ${num} ${num === 1 ? 'bottle' : 'bottles'} of beer.
Take ${num === 1 ? 'it' : 'one'} down and pass it around, ${num - 1 === 0 ? 'no more' : num - 1 } ${ num - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.
`
		}	
};

BeerSong.prototype.sing = function (num1,num2){
	let str = '';
	let minNum = num2 != null ? num2 : 0
	for(var i = num1;i >= minNum;i--){
			if(i !== minNum){
				str += this.verse(i) + '\n'
			} else {
				str += this.verse(i)
			}
	}
	return str
}

module.exports = BeerSong;
