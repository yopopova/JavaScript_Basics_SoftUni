function easterEggsBattle(input) {
    let index = 0;
    let playerOneEggs = Number(input[index]);
    index++;

    let playerTwoEggs = Number(input[index]);
    index++;

    for(let i = 0; i < input.length - 1; i++) {
        let move = input[index];
        index++

        if(move === "one") {
            playerTwoEggs -= 1;
        } else if(move === "two") {
            playerOneEggs -= 1;
        } else if(move === "End of battle") {
            console.log(`Player one has ${playerOneEggs} eggs left.`);
            console.log(`Player two has ${playerTwoEggs} eggs left.`);
        }

        if(playerOneEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
            break;
        } else if(playerTwoEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
            break;
        }
    }
}

// easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
// easterEggsBattle(["2", "6", "one", "two", "two"]);
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);