
//the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var size = 0;
var degree = 20;
var length = 14*degree;
var width = 14*degree;
for(let i = 0; i < 15; i++){
	ctx.moveTo(size,0);
	ctx.lineTo(size,width);
	ctx.stroke();
    size+=degree;
}

size = 0;
for(let i = 0; i < 15; i++){
	ctx.moveTo(0,size);
	ctx.lineTo(width,size);
	ctx.stroke();
    size+=degree;
}



