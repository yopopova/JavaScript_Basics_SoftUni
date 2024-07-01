function coffeeMachine(input) {
    let drink = input[0];
    let extras = input[1];
    let count = Number(input[2]);

    let price = 0;
    let totalAmount = 0;

    if(drink === "Espresso") {
        if(extras === "Without") {
            price = 0.90;
            totalAmount = (price * count) * 0.65;
        } else if(extras === "Normal") {
            price = 1;
            totalAmount = price * count;
        } else if(extras === "Extra") {
            price = 1.20;
            totalAmount = price * count;
        }

        if(count >= 5) {
            totalAmount = totalAmount * 0.75;
        }

    } else if(drink === "Cappuccino") {
        if(extras === "Without") {
            price = 1;
            totalAmount = (price * count) * 0.65;
        } else if(extras === "Normal") {
            price = 1.20;
            totalAmount = price * count;
        } else if(extras === "Extra") {
            price = 1.60;
            totalAmount = price * count;
        }

    } else if(drink === "Tea") {
        if(extras === "Without") {
            price = 0.50;
            totalAmount = (price * count) * 0.65;
        } else if(extras === "Normal") {
            price = 0.60;
            totalAmount = price * count;
        } else if(extras === "Extra") {
            price = 0.70;
            totalAmount = price * count;
        }
    }

    if(totalAmount > 15) {
        totalAmount = totalAmount * 0.80;
    }

    console.log(`You bought ${count} cups of ${drink} for ${totalAmount.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);