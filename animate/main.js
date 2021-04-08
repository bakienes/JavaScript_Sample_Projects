var demo = document.getElementById("demo");
demo.style.color = "white";
demo.style.height = "200px";
demo.style.width = "300px";
demo.style.position = "fixed";
demo.style.top = "1px";
demo.style.left = "1px";
demo.style.backgroundImage = "url(https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";

var isReverseTop = false;
var isReverseLeft = false;
function animate(element,top,left){
    var topOfElement = parseInt(element.style.top.split("px")[0]);
    //console.log(leftOfElement);
    if(topOfElement >= (window.innerHeight-parseInt(element.style.height.split("px")))){
        isReverseTop = true;
    }else if(topOfElement <= 0){
        isReverseTop = false;
    }
    element.style.top = (top + topOfElement).toString()+"px";
    var leftOfElement = parseInt(element.style.left.split("px")[0]);
    //console.log(leftOfElement);
    if(leftOfElement >= (window.innerWidth-parseInt(element.style.width.split("px")))){
        isReverseLeft = true;
    }else if(leftOfElement <= 0){
        isReverseLeft = false;
    }
    element.style.left = (left + leftOfElement).toString()+"px";
}
var timer = setInterval(function(){
    if(isReverseTop == true && isReverseLeft == true){
        animate(demo,-1,-2);
    }else if(isReverseTop == false && isReverseLeft == true){
        animate(demo,1,-2);
    }else if(isReverseTop == true && isReverseLeft == false){
        animate(demo,-1,2);
    }else if(isReverseTop == false && isReverseLeft == false){
        animate(demo,1,2);
    }
},10);
//clearInterval(timer);
