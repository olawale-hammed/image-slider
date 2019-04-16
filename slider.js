var img = [
"image1.jpeg",
"image2.jpeg",
"image3.jpeg",
"image4.jpeg"];
var number = 0
function next(){
	var slider = document.getElementById("slider");
	number++;
	if (number >= img.length) {
		number = 0;
	}
	slider.src=img[number];
}
function prev(){
	var slider = document.getElementById("slider");
	number--;
	if(number < 0){
		number = imgg.length-1;
	}
	slider.src= img[number];
}