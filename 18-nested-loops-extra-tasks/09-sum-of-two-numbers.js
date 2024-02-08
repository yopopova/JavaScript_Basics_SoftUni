function sumOfTwoNumbers(input) {
    let index = 0;
    let startInterval = Number(input[index]);
    index++;

    let endInterval = Number(input[index]);
    index++;

    let magicNumber = Number(input[index]);
    index++;

    let combinationsCounter = 0;

    for(let i = startInterval; i <= endInterval; i++) {
        for(let j = startInterval; j <= endInterval; j++) {
            combinationsCounter++;

            if(i + j === magicNumber) {
                console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
}

// sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["88", "888", "1000"]);
// sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);