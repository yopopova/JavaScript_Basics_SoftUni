function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let count = Number(input[1]); // Number of supernumeraries
    let price = Number(input[2]);

    let decor = budget * 0.1;
    let wearPrice = count * price;
    let total = 0;

    if(count > 150) {
        // wearPrice *= 0.9; Short version of the bottom line.
        wearPrice = wearPrice * 0.9;
        // wearPrice = wearPrice - (wearPrice * 0.1); Another option to calculate the value from the above row.
    }

    total = decor + wearPrice;
    let diff = Math.abs(total - budget); // With Math.abs, there's no danger of getting "-", just a number.

    if(total > budget) {
        // let diff = total - budget; Move outside the check, because otherwise it will only apply to if, and we need it in else as well.
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);