function pcGameShop(input) {
    let soldGames = Number(input[0]);

    let heartstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let others = 0;

    for (let index = 1; index <= soldGames; index++) {
        let currentGame = input[index];

        switch (currentGame) {
            case "Hearthstone": heartstoneCounter++; break;
            case "Fornite": forniteCounter++; break;
            case "Overwatch": overwatchCounter++; break;
            default: others++; break;
        }
    }

    let hearthstoneGames = (heartstoneCounter / soldGames) * 100;
    let forniteGames = (forniteCounter / soldGames) * 100;
    let overwatchGames = (overwatchCounter / soldGames) * 100;
    let otherGames = (others / soldGames) * 100;

    console.log(`Hearthstone - ${hearthstoneGames.toFixed(2)}%`);
    console.log(`Fornite - ${forniteGames.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchGames.toFixed(2)}%`);
    console.log(`Others - ${otherGames.toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);