function footballResults(input) {
    let wins = 0;
    let loses = 0;
    let draws = 0;

    let resultsCount = input.length;

    for (let index = 0; index < resultsCount; index++) {
        let currentResult = input[index];

        let leftNumber = Number(currentResult[0]);
        let rightNumber = Number(currentResult[2]);

        if (leftNumber > rightNumber) {
            wins++;
        } else if (rightNumber > leftNumber) {
            loses++;
        } else {
            draws++;
        }
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);
}

footballResults(["3:1", "0:2", "0:0"]);