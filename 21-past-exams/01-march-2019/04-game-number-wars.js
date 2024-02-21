function gameNumberWars(input) {
    let index = 0;
    let playerOne = input[index];
    index++;

    let playerTwo = input[index];
    index++;

    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    let oneTotalPoints = 0;
    let twoTotalPoints = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let cardOne = input[index];
        index++;

        let cardTwo = Number(input[index]);
        index++;

        if (cardOne !== "End of game") {
            cardOne = Number(cardOne);

            if (cardOne > cardTwo) {
                playerOnePoints = cardOne - cardTwo;
                oneTotalPoints += playerOnePoints;

            } else if (cardOne < cardTwo) {
                playerTwoPoints = cardTwo - cardOne;
                twoTotalPoints += playerTwoPoints;

            } else if (cardOne === cardTwo) {
                cardOne = Number(input[index]);
                index++;

                cardTwo = Number(input[index]);
                index++;

                if (cardOne > cardTwo) {
                    console.log("Number wars!");
                    console.log(`${playerOne} is winner with ${oneTotalPoints} points`);
                    break;
                } else if (cardOne < cardTwo) {
                    console.log("Number wars!");
                    console.log(`${playerTwo} is winner with ${twoTotalPoints} points`);
                    break;
                }
            }

        } else {
            console.log(`${playerOne} has ${oneTotalPoints} points`);
            console.log(`${playerTwo} has ${twoTotalPoints} points`);
            break;
        }
    }
}

// gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNumberWars(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
// gameNumberWars(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);