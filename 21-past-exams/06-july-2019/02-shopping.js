function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videoCardPrice = videoCardsCount * 250;

    let procesorsPrice = videoCardPrice * 0.35;
    let totalProcesorPrice = procesorsPrice * procesorsCount;

    let ramMemoryPrice = videoCardPrice * 0.10;
    let totalRamMemoryPrice = ramMemoryPrice * ramMemoryCount;

    let totalAmount = videoCardPrice + totalProcesorPrice + totalRamMemoryPrice;

    if(videoCardsCount > procesorsCount) {
        totalAmount = totalAmount - (totalAmount * 0.15);
    }

    let diff = Math.abs(budget - totalAmount);

    if(totalAmount > budget) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    } else {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);