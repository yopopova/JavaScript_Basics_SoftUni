function footballResults(input) {
    let firstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];

    let wins = 0;
    let loses = 0;
    let draws = 0;

    let leftNumberFirstResult = Number(firstResult[0]);
    let rightNumberFirstResult = Number(firstResult[2]);

    if(leftNumberFirstResult > rightNumberFirstResult) {
        wins++;
    } else if(rightNumberFirstResult > leftNumberFirstResult) {
        loses++;
    } else {
        draws++;
    }

    let leftNumberSecondResult = Number(secondResult[0]);
    let rightNumberSecondResult = Number(secondResult[2]);

    if(leftNumberSecondResult > rightNumberSecondResult) {
        wins++;
    } else if(rightNumberSecondResult > leftNumberSecondResult) {
        loses++;
    } else {
        draws++;
    }

    let leftNumberThirdResult = Number(thirdResult[0]);
    let rightNumberThirdResult = Number(thirdResult[2]);

    if(leftNumberThirdResult > rightNumberThirdResult) {
        wins++;
    } else if(rightNumberThirdResult > leftNumberThirdResult) {
        loses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);
}

footballResults(["3:1", "0:2", "0:0"]);