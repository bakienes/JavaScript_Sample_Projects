var tahmin1 = prompt("Dice Estimated 1",1);
var tahmin2 = prompt("Dice Estimated 2",1);
var tahminTamSayi1 = parseInt(tahmin1);
var tahminTamSayi2 = parseInt(tahmin2);
var totalSayi = tahminTamSayi1 + tahminTamSayi2;
console.log("Total Your Guess: " +totalSayi);
var random1 = Math.random();
var random2 = Math.random();
if(random1 < 1){
    random1 = (random1+1) * 6;
    random2 = (random2+1) * 6;
    random1 = Math.floor(random1);
    random2 = Math.floor(random2);
    if(random1 > 6){
        random1 = random1 % 6;
    }
    if(random2 > 6){
        random2 = random2 % 6;
    }
    var zarTotal = random1 + random2;
    console.log("Total Dice: " +zarTotal);
}
if(zarTotal == totalSayi){
    console.log("Congratulations, you know the total");
}else{
    console.log("Aradaki Sayi Farki: "+(zarTotal - totalSayi).toString());
}
document.write("I guess: <br>");
for(var counter1 = 0; counter1 < totalSayi; counter1++){
    document.write(" $ ");
}
document.write("<br> Dice Total Result: <br>");
var counter2 = 0;
while(counter2 < zarTotal){
    document.write(" * ");
    counter2++;
}
