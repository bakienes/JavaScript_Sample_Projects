function randomColorGenerator(){
    var elligbleLetters = "ABCDEF0123456789";
    var str = "#";
    var random;
    for(var counter = 0; counter<6; counter++){
        var random = Math.floor(Math.random() * elligbleLetters.length);
        str += elligbleLetters.charAt(random);
    }
    return str;
}
//alert(randomColorGenerator());
function animation(element){
    var counter = 0;
    var timer = setInterval(function(){
        element.style.top = (parseInt(element.style.top.split("px")[0]) + (Math.random()*5)).toString()+"px";
        if(element.style.top.split("px")[0] > window.innerHeight){
            element.style.top = "0px";
            counter ++;
        }
        if(counter > 5){
            clearInterval(timer);
            element.style.top = window.innerHeight+"px";
        }
    },5);
}
var snow;
for(var counter = 0; counter < 50; counter++){
    snow = document.createElement("div");
    snow.classList.add("snow");
    snow.style.backgroundColor = randomColorGenerator();
    snow.style.border = "1px solid black";
    snow.style.top = Math.floor(Math.random() * (window.innerHeight - 50)).toString()+"px";
    snow.style.left = Math.floor(Math.random() * (window.innerWidth-50)).toString()+"px";
    document.body.appendChild(snow);
    animation(snow);
}
