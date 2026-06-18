
 

			//SLIDESHOW//


var i = 0;
var images = [];
var time = 2000;

images[0] = "kunden/aug2025-11.jpg"
images[1] = "kunden/mica2.jpg"
images[2] = "kunden/nov2025-1.jpg"
images[3] = "kunden/nov2025-3.jpg"

function changeImg () {
document.cycle.src = images[i];
if (i < images.length - 1) {
i++;
}
else {
i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;