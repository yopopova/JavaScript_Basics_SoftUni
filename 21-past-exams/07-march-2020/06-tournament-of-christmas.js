function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let winsCounter = 0;
    let losesCounter = 0;

    let donations = 0;

    for (let i = 1; i <= days; i++) {
        let command = input[index]; // Sports
        index++

        let wins = 0;
        let loses = 0;

        let dayDonations = 0;

        while (command !== "Finish") {
            let result = input[index]; // Result: win или lose.
            index++;

            switch (result) {
                case "win":
                    dayDonations += 20;
                    winsCounter++;
                    wins++;
                    break;
                case "lose":
                    losesCounter++;
                    loses++;
                    break;
                case "Finish": break;
            }

            command = input[index];
            index++;
        }

        if (wins > loses) {
            dayDonations *= 1.1;
            donations += dayDonations;
        } else {
            donations += dayDonations;
        }
    }

    if (winsCounter > losesCounter) {
        donations *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donations.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${donations.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);
