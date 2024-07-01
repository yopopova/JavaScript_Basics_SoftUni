function catWalking(input) {
    let walkMin = Number(input[0]);
    let dailyWalksCount = Number(input[1]);
    let dailyCalories = Number(input[2]);

    let totalWalkTime = walkMin * dailyWalksCount;

    let burntCalories = totalWalkTime * 5;

    if(burntCalories < (dailyCalories / 2)) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burntCalories}.`);
    } else {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burntCalories}.`);
    }
}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);