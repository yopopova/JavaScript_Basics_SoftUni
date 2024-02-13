function suitcasesLoad(input) {
    let capacity = Number(input[0]);
    let currentInput = input[1];

    let index = 2;

    let luggageSpace = 0;
    let luggageNum = 0;

    while(currentInput !== "End") {
        let luggage = Number(currentInput);
        luggageNum++;

        if(luggageNum % 3 === 0) {
            luggageSpace += luggage * 1.1;
        } else {
            luggageSpace += luggage;
        }

        if(luggageSpace > capacity) {
            console.log("No more space!");
            console.log(`Statistic: ${luggageNum - 1} suitcases loaded.`);
            return;
        }

        currentInput = input[index];
        index++;
    }

    console.log("Congratulations! All suitcases are loaded!");
    console.log(`Statistic: ${luggageNum} suitcases loaded.`);
}

// suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);