function basketballTournaments(input) {
    let index = 0;
    let command = input[index];
    index++;

    let winsCounter = 0;
    let losesCounter = 0;
    let matchesCounter = 0;


    while (command !== "End of tournaments") {
        let tournamentName = command;

        let matches = Number(input[index]);
        index++;

        for (let i = 1; i <= matches; i++) {
            let teamDesiPoints = Number(input[index]);
            index++;

            let teamOtherPoints = Number(input[index]);
            index++;

            matchesCounter++;

            if(teamDesiPoints > teamOtherPoints) {
                winsCounter++;
                let diffPoints = teamDesiPoints - teamOtherPoints;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${diffPoints} points.`);
            } else {
                losesCounter++
                let diffPoints = teamOtherPoints - teamDesiPoints;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${diffPoints} points.`);
            }
        }
        
        command = input[index];
        index++;
    }

    let winGamesPercentage = (winsCounter / matchesCounter) * 100;
    let lostGamesPercentage = (losesCounter / matchesCounter) * 100;

    if(command === "End of tournaments") {
        console.log(`${winGamesPercentage.toFixed(2)}% matches win`);
        console.log(`${lostGamesPercentage.toFixed(2)}% matches lost`);
    }
}

// basketballTournaments(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTournaments(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);