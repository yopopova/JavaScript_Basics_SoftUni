function coins(input) {
    let money = Number(input[0]);

    let moneyInCoins = Math.floor(money * 100); // We convert levs into pennies to work with 1 unit of measure.
    // ^ In this way, we work entirely with whole numbers, because the program gives errors with fractional numbers.
    // ^ We write Math.floor, because otherwise it will return a fractional number again, which does not work for us.
    // This is a problem in computers, so the libraries in question are used. There's a code out there that's already been set by someone, and we're just using it.
    
    let counter = 0;

    while(moneyInCoins > 0) {

        if(moneyInCoins >= 200) {
            counter++;
            moneyInCoins -= 200;
        } else if(moneyInCoins >= 100) {
            counter++;
            moneyInCoins -= 100;
        } else if(moneyInCoins >= 50) {
            counter++;
            moneyInCoins -= 50;
        } else if(moneyInCoins >= 20) {
            counter++;
            moneyInCoins -= 20;
        } else if(moneyInCoins >= 10) {
            counter++;
            moneyInCoins -= 10;
        } else if(moneyInCoins >= 5) {
            counter++;
            moneyInCoins -= 5;
        } else if(moneyInCoins >= 2) {
            counter++;
            moneyInCoins -= 2;
        } else {
            counter++;
            moneyInCoins -= 1;
        }

    }

    console.log(counter);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);