function footballTournament(input) {
    let index = 0;
    let team = input[index];
    index++;

    let matches = Number(input[index]);
    index++;

    let points = 0;
    let pointsCounter = 0;

    let wCount = 0;
    let dCount = 0;
    let lCount = 0;

    while(matches > 0) {
        let result = input[index];
        index++;

        if(result === "W") {
            points = 3;
            wCount++;
        } else if(result === "D") {
            points = 1;
            dCount++;
        } else if(result === "L") {
            points = 0;
            lCount++;
        } else {
            break;
        }

        pointsCounter += points;

        result = input[index];
    }

    let winRate = (wCount / matches) * 100;

    if(matches === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${pointsCounter} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wCount}`);
        console.log(`## D: ${dCount}`);
        console.log(`## L: ${lCount}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
}

// footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
// footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);