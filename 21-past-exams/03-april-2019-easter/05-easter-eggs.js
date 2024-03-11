function easterEggs(input) {
    let index = 0;
    let paintedEggs = Number(input[index]);
    index++;

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    for(let i = 0; i < paintedEggs; i++) {
        let color = input[index];
        index++;

        if(color === "red") {
            redCount++;
        } else if(color === "orange"){
            orangeCount++;
        } else if(color === "blue") {
            blueCount++;
        } else if(color === "green"){
            greenCount++;
        }
    }

    let maxEggs = 0;
    let maxEggsColor = " ";

    if(redCount > orangeCount && redCount > blueCount && redCount > greenCount) {
        maxEggs = redCount;
        maxEggsColor = "red";

    } else if(orangeCount > redCount && orangeCount > blueCount && orangeCount > greenCount) {
        maxEggs = orangeCount;
        maxEggsColor = "orange";

    } else if(blueCount > redCount && blueCount > orangeCount && blueCount > greenCount) {
        maxEggs = blueCount;
        maxEggsColor = "blue";

    } else if(greenCount > redCount && greenCount > orangeCount && greenCount > blueCount) {
        maxEggs = greenCount;
        maxEggsColor = "green";
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`);
}

// easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);