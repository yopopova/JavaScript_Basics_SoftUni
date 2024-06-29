function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let food = Number(input[index]);
    index++;

    let eatenDogFood = 0;
    let eatenCatFood = 0;

    let currentBiscuits = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index]);
        index++;

        let catFood = Number(input[index]);
        index++;

        eatenDogFood += dogFood;
        eatenCatFood += catFood;

        if(i % 3 === 0) {
            currentBiscuits = (dogFood + catFood) * 0.1;
            biscuits += currentBiscuits; // We must collect the current cookies, because if we have 6 days, for example, and we don't collect them, the program will show us the same number on each rotation of the loop.
        }
    }

    let allEatenFood = eatenDogFood + eatenCatFood;
    let percentageEatenFood = (allEatenFood / food) * 100;
    let percentageDogFood = (eatenDogFood / allEatenFood) * 100;
    let percentageCatFood = (eatenCatFood / allEatenFood) * 100;

    console.log(`Total eaten biscuits: ${biscuits.toFixed()}gr.`);
    console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentageDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentageCatFood.toFixed(2)}% eaten from the cat.`);
}

// foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);