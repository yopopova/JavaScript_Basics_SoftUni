function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let route = String(input[2]);

    let juniorsAmount = 0;
    let seniorsAmount = 0;
    let totalAmount = 0;

    let juniorsPlusSeniors = juniors + seniors;

    if(route === "trail") {
        juniorsAmount = juniors * 5.50;
        seniorsAmount = seniors * 7;
        totalAmount = juniorsAmount + seniorsAmount;

    } else if(route === "cross-country") {
        juniorsAmount = juniors * 8;
        seniorsAmount = seniors * 9.50;
        totalAmount = juniorsAmount + seniorsAmount;

        if(juniorsPlusSeniors >= 50) {
            totalAmount = totalAmount - (totalAmount * 0.25);
        }

    } else if(route === "downhill") {
        juniorsAmount = juniors * 12.25;
        seniorsAmount = seniors * 13.75;
        totalAmount = juniorsAmount + seniorsAmount;

    } else if(route === "road") {
        juniorsAmount = juniors * 20;
        seniorsAmount = seniors * 21.50;
        totalAmount = juniorsAmount + seniorsAmount;
    }

    let donation = 0;
    let cost = 0;
    cost = totalAmount * 0.05;
    donation = totalAmount - cost;

    console.log(`${donation.toFixed(2)}`);
}

bikeRace(["10", "20", "trail"]);
bikeRace(["20", "25", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);