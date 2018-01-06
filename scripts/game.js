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
                    multChange:3.3
            },
            pills:{
                hasUpg:false,
                cost:5000,
                multChange:14.2
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
        this.coinDifficulty = 100000000;
        this.timeToCoin = this.coinDifficulty/this.speed; //in seconds
        this.upgrades = {
            ram:{
                hasUpg:false,
                cost:10000,
                speedChange:40.0
            }
        };   
    }
    updateTimeToCoin(){
        this.timeToCoin = this.coinDifficulty/this.speed;
    }
      updateUpg(user,upgName){
        if(this.upgrades[upgName]){
            if(!this.upgrades[upgName].hasUpg && user.money-this.upgrades[upgName].cost >=0){
                this.upgrades[upgName].hasUpg = true;
                user.money -= this.upgrades[upgName].cost;
                if(this.upgrades[upgName].speedChange){
                    this.speed += this.upgrades[upgName].speedChange;
                    this.updateTimeToCoin();
                    console.log("Current speed is: " + this.speed);
                    console.log("New mult is: " + this.speed);
                }
                return (true); //upgrade successful
            }
        }
        
    }
    getTimeToCoin(){
                //console.log("Speed is: " + this.speed);
        //console.log("Time to coin is: "+this.timeToCoin);
        return this.timeToCoin;

    }
    
    
}

function init(){
    
}