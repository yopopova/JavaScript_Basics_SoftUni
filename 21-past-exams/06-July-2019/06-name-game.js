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
            letter = playerName[i]; // We take each letter separately.
            let symbol = letter.charCodeAt(0); // The ASCII value (number) of each letter.

            let num = Number(input[index]); // Here we read the number from the console against which we will compare the ASCII value of the letter.
            index++;

            if(symbol === num) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }

            if(currentPoints >= maxPoints) { // Must have an = to be able to take the second player's name on a tie.
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