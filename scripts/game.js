class User{
    constructor(name){
        this.name = name;
        this.money = 0;
        this.bitCoins = 0.0;
        this.multiplier = 1.0;
        this.upgrades = {
            caffeine:{
                    hasUpg:false,
                    cost:1000,
                    multChange:1.3
            }
        };
    }
    updateUpg(upgName){
        if(this.upgrades[upgName]){
            if(!this.upgrades[upgName].hasUpg && this.money-this.upgrades[upgName].cost >=0){
                this.upgrades[upgName].hasUpg = true;
                this.money -= this.upgrades[upgName].cost;
                if(this.upgrades[upgName].multChange){
                    this.multiplier += this.upgrades[upgName].multChange;
                    console.log("New mult is: " + this.multiplier);
                }
                return (true); //upgrade successful
            }
        }
        console.log("Current mult is: " + this.multiplier);
    }
     work(){
        this.money += Math.round((1*this.multiplier));
    }
    getMoney(){
        return this.money;
    }
    getBitCoins(){
        return this.bitCoins.toFixed(8);
    }
    getUpgrades(){
        return this.upgrades;
    }
    setBitcoins(addCoins){
        this.bitCoins += addCoins;
    }
    mine(timeToCoin){
        this.bitCoins += 1/timeToCoin;
    }
}

class System{
    constructor(){
        this.speed = 1.3; //Ghz
        this.timeToCoin = 100000000/this.speed; //in seconds
        this.multiplier = 1.0;
    }
    getTimeToCoin(){
        return this.timeToCoin;
    }
}

function init(){
    
}