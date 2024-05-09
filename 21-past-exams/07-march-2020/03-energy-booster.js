function energyBooster(input) {
    let fruit = input[0];
    let setSize = input[1];
    let setCount = Number(input[2]);

    let price = 0;
    let totalPrice = 0;

    if(fruit === "Watermelon") {
        if(setSize === "small") {
            price = 2 * 56;
        } else if(setSize === "big") {
            price = 5 * 28.70;
        }

        totalPrice = price * setCount;

    } else if(fruit === "Mango") {
        if(setSize === "small") {
            price = 2 * 36.66;
        } else if(setSize === "big") {
            price = 5 * 19.60;
        }

        totalPrice = price * setCount;

    } else if(fruit === "Pineapple") {
        if(setSize === "small") {
            price = 2 * 42.10;
        } else if(setSize === "big") {
            price = 5 * 24.80;
        }

        totalPrice = price * setCount;

    } else if(fruit === "Raspberry") {
        if(setSize === "small") {
            price = 2 * 20;
        } else if(setSize === "big") {
            price = 5 * 15.20;
        }

        totalPrice = price * setCount;
    }

    if(totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85
    } else if(totalPrice > 1000) {
        totalPrice = totalPrice / 2;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);