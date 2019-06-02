var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
color1.addEventListener("change",setGradient);
color2.addEventListener("change",setGradient);
function setGradient() {
    console.log(color1.value)
	body.style.background = 
	"linear-gradient(to right, " 
	+ "#"+color1.value 
	+ ", " 
	+ "#"+color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}