function suitcasesLoad(input) {
    let index = 0;
    let trunkVolume = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let volume = 0;

    while(command !== "End") {
        let suitcase = Number(command);

        if(trunkVolume <= suitcase) {
            console.log("No more space!");
            console.log(`Statistic: ${counter} suitcases loaded.`);
            break;
        }

        counter++;

        if(counter % 3 === 0) {
            volume = suitcase + (suitcase * 0.1);
            suitcase = volume;
        }

        trunkVolume -= suitcase;
        
        command = input[index];
        index++;
    }

    if(command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}

// suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
// suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);