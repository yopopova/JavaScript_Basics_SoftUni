function club(input) {
    let index = 0;
    let goalMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    cocktailPrice = 0;
    totalPrice = 0;

    while(command !== "Party!") {
        let cocktail = command;

        let cocktailCounts = Number(input[index]);
        index++;

        let cocktailLength = cocktail.length;
        cocktailPrice = cocktailLength * cocktailCounts;

        if(cocktailPrice % 2 !== 0) {
            cocktailPrice -= cocktailPrice * 0.25;
        }

        totalPrice += cocktailPrice;

        if(totalPrice >= goalMoney) {
            console.log("Target acquired.");
            console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
            break;
        }

        command = input[index];

        cocktailCounts = Number(input[index]);
        index++;
    }

    if(command === "Party!") {
        let diff = goalMoney - totalPrice;
        console.log(`We need ${diff.toFixed(2)} leva more.`);
        console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
    }
}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);