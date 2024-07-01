function footballResults(input) {
    let firstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];

    let frLeft = Number(firstResult[0]);
    let frRight = Number(firstResult[2]);

    let scndLeft = Number(secondResult[0]);
    let scndRight = Number(secondResult[2]);

    let trdLeft = Number(thirdResult[0]);
    let trdRight = Number(thirdResult[2]);

    let wins = 0;
    let losses = 0;
    let draws = 0;

    if(frLeft > frRight) {
        wins = wins + 1;
    } else if(frLeft < frRight) {
        losses = losses + 1;
    } else {
        draws = draws + 1;
    }

    if(scndLeft > scndRight) {
        wins = wins + 1;
    } else if(scndLeft < scndRight) {
        losses = losses + 1;
    } else {
        draws = draws + 1;
    }

    if(trdLeft > trdRight) {
        wins = wins + 1;
    } else if(trdLeft < trdRight) {
        losses = losses + 1;
    } else {
        draws = draws + 1;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}

footballResults(["3:1", "0:2", "0:0"]);
footballResults(["4:2", "0:3", "1:0"]);
footballResults(["0:2", "0:1", "3:3"]);