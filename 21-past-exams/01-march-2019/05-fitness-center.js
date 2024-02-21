function fitnessCenter(input) {
    let index = 0;
    let allPeople = Number(input[index]);
    index++;

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;

    let inputL = input.length;

    for(let i = 1; i < inputL; i++) {
        let activity = input[index];
        index++;

        if(activity === "Back") {
            backCounter++;
        } else if(activity === "Chest") {
            chestCounter++;
        } else if(activity === "Legs") {
            legsCounter++
        } else if(activity === "Abs") {
            absCounter++;
        } else if(activity === "Protein shake") {
            proteinShakeCounter++;
        } else if(activity === "Protein bar") {
            proteinBarCounter++;
        }
    }

    let trainingPeople = backCounter + chestCounter + legsCounter + absCounter;
    let productBuying = proteinShakeCounter + proteinBarCounter;

    let trainingPeoplePercentage = (trainingPeople / allPeople) * 100;
    let productBuyingPercentage = (productBuying / allPeople) * 100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);
    console.log(`${trainingPeoplePercentage.toFixed(2)}% - work out`);
    console.log(`${productBuyingPercentage.toFixed(2)}% - protein`);
}

// fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);