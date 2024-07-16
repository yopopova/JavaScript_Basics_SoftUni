function maxNumber(input) {
    let n = Number(input[0]);
    let biggestNum = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let currentNum = Number(input[i]);

        if (currentNum > biggestNum) {
            biggestNum = currentNum;
            // ^ If the number we're currently reading from the loop (currentNum) is greater than the largest number (biggestNum),
            // then we assign the value of the current number (currentNum) to the largest number (biggestNum) to print on the goat.
        }
    }

    console.log(biggestNum);
}

maxNumber(["2", "100", "99"]);
maxNumber(["3", "-10", "20", "-30"]);
maxNumber(["4", "45", "-20", "7", "99"]);
maxNumber(["1", "999"]);
maxNumber(["2", "-1", "-2"]);