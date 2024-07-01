function easterParty(input) {
    let guestsCount = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budget = Number(input[2]);

    let extraPrice = 0;

    if(guestsCount > 20) {
        extraPrice = pricePerPerson - (pricePerPerson * 0.25);
    } else if(guestsCount > 15) {
        extraPrice = pricePerPerson - (pricePerPerson * 0.20);
    } else if(guestsCount >= 10) {
        extraPrice = pricePerPerson - (pricePerPerson * 0.15);
    } else {
        extraPrice = pricePerPerson;
    }

    let cakePrice = budget * 0.10;

    let totalAmount = (guestsCount * extraPrice) + cakePrice;

    let diff = Math.abs(budget - totalAmount);

    if(budget < totalAmount) {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    }
}

easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);