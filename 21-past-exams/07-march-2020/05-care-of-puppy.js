function careOfPuppy(input) {
    let index = 0;
    let foodKilos = Number(input[index]);
    index++;
    
    let foodGrams = foodKilos * 1000;

    let command = input[index];
    index++;

    let totalFood = 0;

    while (command !== "Adopted") {
        let foodPerDay = Number(command);

        totalFood += foodPerDay;

        command = input[index];
        index++;
    }

    if(command === "Adopted") {
        let diff = Math.abs(foodGrams - totalFood);

        if(totalFood <= foodGrams) {
            console.log(`Food is enough! Leftovers: ${diff} grams.`);
        } else {
            console.log(`Food is not enough. You need ${diff} grams more.`);
        }
    }
}

// careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
// careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);