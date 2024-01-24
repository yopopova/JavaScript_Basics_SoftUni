function dishwasher(input) {
    let index = 0;
    let preparationBottles = Number(input[index]);
    index++;

    let preparation = preparationBottles * 750;

    let command = input[index];
    index++;

    let dishesCount = 0;
    let platesCount = 0;
    let potsCount = 0;

    let platesMl = 0;
    let potsMl = 0;

    while(command !== "End") {
        let dishes = Number(command);

        if(preparation <= 0) {
            console.log(`Not enough detergent, ${Math.abs(preparation)} ml. more necessary!`);
            break;
        }

        dishesCount++;

        if(dishesCount % 3 === 0) {
            potsCount += dishes;
            potsMl = dishes * 15;
            preparation -= potsMl;
            
        } else {
            platesCount += dishes;
            platesMl = dishes * 5;
            preparation -= platesMl;
        }

        command = input[index];
        index++;
    }

    if(command === "End") {
        console.log("Detergent was enough!");
        console.log(`${platesCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${preparation} ml.`);
    }
}

// dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);