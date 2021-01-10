var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) +1;
console.log(rand1);

var new_image_1 = "images/dice" + String(rand1) + ".png";
var new_image_2 = "images/dice" + String(rand2) + ".png";
document.querySelector(".img1").setAttribute("src",new_image_1);
document.querySelector(".img2").setAttribute("src",new_image_2);
if(rand1 > rand2){
    document.querySelector("h1").style.color = "red";
    
    document.querySelector("h1").innerHTML =  "Player 1 Wins";
}
else if(rand1 < rand2){
document.querySelector("h1").style.color = "red";
    
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
document.querySelector("h1").style.color = "red";
    
    document.querySelector("h1").innerHTML = "Draws";
}