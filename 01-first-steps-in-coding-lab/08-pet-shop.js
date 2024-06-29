function petShop(input) {
    let dogsNumber = Number(input[0]);
    let otherAnimals = Number(input[1]);

    let dogsFoodAmount = dogsNumber * 2.50;
    let otherAnimalsAmount = otherAnimals * 4;

    let totalAmount = dogsFoodAmount + otherAnimalsAmount;
    console.log(`${totalAmount} lv.`);
}

petShop(["5", "4"]);
petShop(["13", "9"]);