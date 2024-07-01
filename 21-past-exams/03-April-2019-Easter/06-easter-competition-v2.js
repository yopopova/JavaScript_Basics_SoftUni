function easterCompetition(input) {
    let index = 0;
    let easterBread = Number(input[index]);
    index++;

    let totalPoints = 0;
    let maxVote = 0;
    let topChef = "";

    for (let i = 0; i < easterBread; i++) {
        let baker = input[index];
        index++;

        let command = input[index];
        index++;

        while (command !== "Stop") {
            let vote = Number(command);

            if (vote <= 0 || vote > 10) { // This check insures that the program will only calculate scores from 1 to 10 - the rest are invalid.
                command = input[index];
                index++;
                continue;
            }

            totalPoints += vote;

            command = input[index];
            index++;
        }

        console.log(`${baker} has ${totalPoints} points.`);

        if (totalPoints > maxVote) {
            maxVote = totalPoints;
            topChef = baker;
            console.log(`${topChef} is the new number 1!`);
        }

        totalPoints = 0;
    }

    console.log(`${topChef} won competition with ${maxVote} points!`);
}

easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);
// easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);
// easterCompetition(["2", "Chef Angelov", "9", "11", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);