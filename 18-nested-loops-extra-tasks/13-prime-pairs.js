function primePairs(input) {
    let startFirstPair = Number(input[0]);
    let startSecondPair = Number(input[1]);
    let diffFirstPair = Number(input[2]);
    let diffSecondPair = Number(input[3]);

    let endFirstPair = startFirstPair + diffFirstPair;
    let endSecondPair = startSecondPair + diffSecondPair;

    for (let a = startFirstPair; a <= endFirstPair; a++) {
        for (let b = startSecondPair; b <= endSecondPair; b++) {
            if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0 && b % 2 !== 0 && b % 3 !== 0 && b % 5 !== 0 && b % 7 !== 0) {
                console.log(`${a}${b}`);
            }
        }
    }
}

// primePairs(["10", "20", "5", "5"]);
primePairs(["10", "30", "9", "6"]);