/*
Detects the file and calls the call back with appropriate string
*/

var io = require ('fs');

var ImageDetector = {

    JPGSign: [255, 216],
    PNGSign: [137,80,78,71,13,10,26,10],
    GIFSign: [71, 73, 70, 56, 57],
    
    Detect: function(fileName, cb) {
	var that = this;

	io.readFile(fileName, function (error, data) {

	    if (that._compare(that.JPGSign, data.slice(0, that.JPGSign.length))) {
		cb('JPG');
		return;
	    }

	    if (that._compare(that.PNGSign, data.slice(0, that.PNGSign.length))) {
		cb('PNG');
		return;
	    }

	    if (that._compare(that.GIFSign, data.slice(0, that.GIFSign.length))) {
		cb('GIF');
		return;
	    }

	    cb('UNKNOWN');
	}); // end of readFile
    },

    _compare: function(first, second) {
	for(var f=0; f < first.length; f+=1) {
	    if (first[f] !== second[f]) 
		return false;
	    return true;
	}
    } // end of _compare
};

/* Some simple tests to see ImageDetector works just fine */
ImageDetector.Detect('jpeg.jpg', function(i) {
    console.log(i);
});

ImageDetector.Detect('png.png', function(i) {
    console.log(i);
});

ImageDetector.Detect('server.js', function(o) {
    console.log(o);
});

ImageDetector.Detect('gif.gif', function(o) {
    console.log(o);
});

<<<<<<< HEAD
ImageDetector.Detect('abc3')
=======
// Just adding a new test where the file is not there 
ImageDetector.Detect('abc2', function(o){
    console.log(o);
});
>>>>>>> dev
