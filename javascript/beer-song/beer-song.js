class BeerSong {
	verse(num) {
		if (num === 0) {
			return "No more bottles of beer on the wall, no more bottles of beer.\n"  +
						 "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
		} else {
				return this.bottles(num) + " of beer on the wall, " + 
	             this.bottles(num) + " of beer.\n" +
	             "Take " + this.next_bottle(num) + " down and pass it around, " + 
	             this.bottles(num - 1) + " of beer on the wall.\n";  
		}
	}

	sing(num1,num2) {
		let str = "";
		let minNum = num2 != null ? num2 : 0
		for (var i = num1; i >= minNum; i--){
				if (i !== minNum){
					str += this.verse(i) + "\n"
				} else {
					str += this.verse(i)
				}
		}
		return str
	}

	bottles(num) {
    if (num == 0){
      return "no more bottles"
    } else if (num == 1){
      return "1 bottle";
    } else {
      return num + " bottles";
    }
	}

  next_bottle(num) {
    if (num == 1){
      return "it";
    } else {
      return "one";
    }
  }
};
	

module.exports = BeerSong;
