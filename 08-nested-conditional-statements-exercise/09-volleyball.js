function volleyball(input) {
    let yearType = input[0];
    let holidaysInYear = Number(input[1]);
    let weekendsTraveling = Number(input[2]);

    let weekendsSofia = 48 - weekendsTraveling;
    let gamesSofia = weekendsSofia * 3 / 4;
    let holidaysGames = holidaysInYear * 2 / 3;

    let allGames = weekendsTraveling + gamesSofia + holidaysGames;

    if(yearType === "leap") {
        allGames = allGames + (allGames * 0.15);
        console.log(Math.floor(allGames));
    } else if(yearType === "normal") {
        console.log(Math.floor(allGames));
    }

}

volleyball(["leap", "5", "2"]);
volleyball(["normal", "3", "2"]);
volleyball(["leap", "2", "3"]);
volleyball(["normal", "11", "6"]);
volleyball(["leap", "0", "1"]);
volleyball(["normal", "6", "13"]);