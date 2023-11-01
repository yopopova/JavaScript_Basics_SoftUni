function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let count = Number(input[1]);
    let price = Number(input[2]);

    let decor = budget * 0.1;
    let wearPrice = count * price;
    let total = 0;

    if(count > 150) {
        wearPrice = wearPrice * 0.9;
    }

    total = decor + wearPrice;
    let diff = Math.abs(total - budget);

    if(total > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}