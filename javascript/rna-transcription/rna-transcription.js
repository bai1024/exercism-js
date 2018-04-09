var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (str) {
	var mapObj = {
	   C:"G",
	   G:"C",
	   A:"U",
	   T:"A"
	};

	return str.replace(/C|G|A|T/gi, matched =>{
  	return mapObj[matched];
	});

};

module.exports = DnaTranscriber;
