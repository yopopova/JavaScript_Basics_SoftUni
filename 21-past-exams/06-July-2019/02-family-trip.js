function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let extrasPecentage = Number(input[3]);

    if(nightsCount > 7) {
        nightPrice = nightPrice - (nightPrice * 0.05);
    }

    let nightsFinalPrice = nightsCount * nightPrice;

    let extrasPrice = (budget * extrasPecentage) / 100;

    let totalAmount = nightsFinalPrice + extrasPrice;

    let diff = Math.abs(budget - totalAmount);

    if(totalAmount > budget) {
        console.log(`${diff.toFixed(2)} leva needed.`);
    } else {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    }
}

familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);