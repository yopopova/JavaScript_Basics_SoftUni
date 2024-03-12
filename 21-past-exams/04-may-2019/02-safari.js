function safari(input) {
    let budget = Number(input[0]);
    let fuelLiters = Number(input[1]);
    let day = input[2];

    let totalPrice = (fuelLiters * 2.10) + 100;

    if(day === "Saturday") {
        totalPrice = totalPrice - (totalPrice * 0.10);
    } else {
        totalPrice = totalPrice - (totalPrice * 0.20);
    }

    let diff = Math.abs(budget - totalPrice);

    if(budget < totalPrice) {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    }
}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
safari(["105.20", "15", "Sunday"]);