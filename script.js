
 

			//SLIDESHOW//


var i = 0;
var images = [];
var time = 2000;

images[0] = "kunden/aug2025-1.png"
images[1] = "kunden/aug2025-2.png"
images[2] = "kunden/aug2025-3.png"
images[3] = "kunden/aug2025-4.png"

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