function pcGameShop(input) {
    let index = 0;
    let gameCounter = Number(input[index]);
    index++;

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    let inputL = input.length;
    // ^ If we don't lock it in a variable, but write it directly in for, it means that the program will calculate the length of the array every time, which slows down the program and is not a good practice.

    for(let i = 1; i < inputL; i++) { // To avoid writing input.length - 1, let's just start i from 1 and replace input.length - 1 with the name of a variable in which we locked the value with the length of the array.
        let gameName = input[index];
        index++;

        switch(gameName) {
            case "Hearthstone": hearthstone++; break;
            case "Fornite": fornite++; break;
            case "Overwatch": overwatch++; break;
            default: others++; break;
        }
    }

    let hearthstoneGames = (hearthstone / gameCounter) * 100;
    let forniteGames = (fornite / gameCounter) * 100;
    let overwatchGames = (overwatch / gameCounter) * 100;
    let otherGames = (others / gameCounter) * 100;

    console.log(`Hearthstone - ${hearthstoneGames.toFixed(2)}%`);
    console.log(`Fornite - ${forniteGames.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchGames.toFixed(2)}%`);
    console.log(`Others - ${otherGames.toFixed(2)}%`);
}

// pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);