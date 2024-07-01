function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;

    let startPoints = Number(input[index]);
    index++;

    let points = 0;
    let winsCount = 0;

    let inputL = input.length;

    for(let i = 2; i < inputL; i++) {
        let tournamentType = input[index];
        index++;

        if(tournamentType === "W") {
            points += 2000;
            winsCount++;
        } else if(tournamentType === "F") {
            points += 1200;
        } else if(tournamentType === "SF") {
            points += 720;
        }
    }

    let finalPoints = startPoints + points;
    let avgPoints = points / tournaments;
    let winTournemants = (winsCount / tournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winTournemants.toFixed(2)}%`);
}

// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
// tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);