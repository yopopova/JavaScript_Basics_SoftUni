function nameGame(input) {
    let index = 0;
    let playerName = input[index];
    index++;

    let letter = 0;
    let maxPoints = 0;
    let winnerName = "";

    while (playerName !== "Stop") {
        let playerNameL = playerName.length;
        let currentPoints = 0;

        for (let i = 0; i < playerNameL; i++) {
            letter = playerName[i];
            let symbol = letter.charCodeAt(0);

            let num = Number(input[index]);
            index++;

            if(symbol === num) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }

            if(currentPoints >= maxPoints) {
                maxPoints = currentPoints;
                winnerName = playerName;
            }
        }

        playerName = input[index];
        index++;
    }

    console.log(`The winner is ${winnerName} with ${maxPoints} points!`);
}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);