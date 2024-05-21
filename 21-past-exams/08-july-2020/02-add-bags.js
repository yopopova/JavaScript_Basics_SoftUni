function addBags(input) {
    let luggagePriceAbove20Kg = Number(input[0]);
    let luggageKgs = Number(input[1]);
    let days = Number(input[2]);
    let luggageCount = Number(input[3]);

    let luggagePrice = 0;

    if(luggageKgs < 10) {
        luggagePrice = luggagePriceAbove20Kg * 0.20;
    } else if(luggageKgs <= 20) {
        luggagePrice = luggagePriceAbove20Kg / 2;
    } else {
        luggagePrice = luggagePriceAbove20Kg;
    }

    if(days < 7) {
        luggagePrice = luggagePrice + (luggagePrice * 0.40);
    } else if(days <= 30) {
        luggagePrice = luggagePrice + (luggagePrice * 0.15);
    } else {
        luggagePrice = luggagePrice + (luggagePrice * 0.10);
    }

    let totalPrice = luggagePrice * luggageCount;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);;
}

addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);