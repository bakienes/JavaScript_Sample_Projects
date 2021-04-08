var divSecond, divMinute, divHour;
divSecond = document.getElementById("second");
divMinute = document.getElementById("minute");
divHour = document.getElementById("hour");

var date = new Date();
var hours,minutes,seconds;
function changeFormat(unit){
    if(unit <= 9){
        return "0"+unit;
    }else{
        return unit;
    }
}
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
function increase_second(second){
    second += 1;
    if(second > 59){
        minutes = increase_minute(minutes);
        second = 0;
    }
    return second;
}
function increase_minute(minute){
    minute += 1;
    if(minute > 59){
        hours = increase_hour(hours);
        minute = 0;
    }
    return minute;
}
function increase_hour(hour){
    hour += 1;
    if(hour > 23){
        hour = 0;
    }
    return hour;
}
for(var counter = 0; counter < seconds; counter++){
    divSecond.innerText += "S";
}
for(var counter1 = 0; counter1 < minutes; counter1++){
    divMinute.innerText += "M";
}
for(var counter2 = 0; counter2 < hours; counter2++){
    divHour.innerText += "H";
}
setInterval(function(){
    seconds = increase_second(seconds);
    if(seconds == 0){
        divSecond.innerText = "";
        divMinute.innerText += "M";
    }
    if(minutes == 0 && seconds == 0){
        divMinute.innerText = "";
        divHour.innerText += "H";
    }
    if(hours == 0 && minutes == 0){
        divHour.innerText = "";
    }
    divSecond.innerText += "S";
    console.log(seconds);
},1000);



