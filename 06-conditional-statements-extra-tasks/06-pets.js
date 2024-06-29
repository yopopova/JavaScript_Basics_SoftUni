function pets(input) {
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catFoodKg = Number(input[3]);
    let turtleFoodGr = Number(input[4]);

    let turtleFoodKg = turtleFoodGr / 1000;

    let dogFood = dogFoodKg * days;
    let catFood = catFoodKg * days;
    let turtleFood = turtleFoodKg * days;

    let allFood = dogFood + catFood + turtleFood;

    let diff = Math.abs(foodLeft - allFood);

    if(foodLeft < allFood) {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    } else {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);