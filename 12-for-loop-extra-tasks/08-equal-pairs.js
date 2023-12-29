function equalPairs(input) {
    let index = 0;
    let pairsCount = Number(input[index]);
    index++;

    let sum = 0;
    let difference = 0;
    let maxDiff = 0;

    for (let i = 0; i < pairsCount; i++) {
        let numOne = Number(input[index]);
        index++;

        let numTwo = Number(input[index]);
        index++;

        let currentSum = numOne + numTwo;

        if (i === 0) {
            sum = currentSum;
        } else {
            difference = Math.abs(sum - currentSum);
            sum = currentSum;
        }

        if(difference > maxDiff) {
            maxDiff = difference;
        }
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

// equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
// equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
// equalPairs(["2", "-1", "0", "0", "-1"]);
// equalPairs(["2", "1", "2", "2", "2"]);
// equalPairs(["1", "5", "5"]);
// equalPairs(["2", "-1", "2", "0", "-1"]);
equalPairs(["7", "34", "-33", "52", "12", "-32", "32"]);