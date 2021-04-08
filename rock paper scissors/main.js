var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
class TKM{
    constructor(){
        this.sonuc = ["Rock ","Paper ","Scissors "];
    }
    hareketUret(){
        var key = Math.floor(Math.random()*3);
        var hand = this.sonuc[key];
        this.firstPick = hand;
        console.log("Player 1 "+hand+" pulled your move");
        return this;
    }
    hareketUret2(){
        var key = Math.floor(Math.random()*3);
        var hand = this.sonuc[key];
        this.secondPick = hand;
        console.log("Player 2 "+hand+" pulled your move");
        return this;
    }
    kontrolEt(){
        if(this.firstPick === this.secondPick){
            return this.yenidenOynansin();
        }else if(this.firstPick === "Rock " && this.secondPick === "Paper "){
            return 2;
        }else if(this.firstPick === "Rock " && this.secondPick === "Scissors "){
            return 1;
        }else if(this.firstPick === "Paper " && this.secondPick === "Scissors "){
            return 2;
        }else if(this.firstPick === "Paper " && this.secondPick === "Rock "){
            return 1;
        }else if(this.firstPick === "Scissors " && this.secondPick === "Paper "){
            return 1;
        }else if(this.firstPick === "Scissors " && this.secondPick === "Rock "){
            return 2;
        }else{
            console.log("Machine Failed");
        }
    }
    yenidenOynansin(){
        console.log("The Game Is Playing Again");
        var kimKazandi = this.hareketUret().hareketUret2().kontrolEt();
        return kimKazandi;
    }
}
var tkm = new TKM();
var kimKazandi;
for(var counter = 0; counter < 300; counter++){
    kimKazandi = tkm.hareketUret().hareketUret2().kontrolEt();
    if(kimKazandi === 1){
        player1.innerText += "+";
    }else if(kimKazandi === 2){
        player2.innerText += "+";
    }else{
        console.log("Game Not Valid");
    }
}
