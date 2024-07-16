function evenAndOddPositions(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let minOdd = Number.MAX_SAFE_INTEGER;
    let maxOdd = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;

    let minEven = Number.MAX_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[index]);
        index++;

        if (i % 2 !== 0) { // ODD
            oddSum += currentNum;

            if (currentNum > maxOdd) {
                maxOdd = currentNum;
            }

            if (minOdd > currentNum) {
                minOdd = currentNum;
            }

        } else { // EVEN
            evenSum += currentNum;

            if (currentNum > maxEven) {
                maxEven = currentNum;
            }

            if (minEven > currentNum) {
                minEven = currentNum;
            }
        }
    }

    if (n === 0) {
        console.log(`OddSum=${oddSum}`);
        console.log("OddMin=No");
        console.log("OddMax=No");
        console.log(`EvenSum=${evenSum}`);
        console.log("EvenMin=No");
        console.log("EvenMax=No");
    } else if (n === 1) {
        console.log(`OddSum=${oddSum}`);
        console.log(`OddMin=${minOdd}`);
        console.log(`OddMax=${maxOdd}`);
        console.log(`EvenSum=${evenSum}`);
        console.log("EvenMin=No");
        console.log("EvenMax=No");
    } else {
        console.log(`OddSum=${oddSum}`);
        console.log(`OddMin=${minOdd}`);
        console.log(`OddMax=${maxOdd}`);
        console.log(`EvenSum=${evenSum}`);
        console.log(`EvenMin=${minEven}`);
        console.log(`EvenMax=${maxEven}`);
    }
}

// evenAndOddPositions(["6", "2", "3", "5", "4", "2", "1"]);
// evenAndOddPositions(["2", "1.5", "-2.5"]);
// evenAndOddPositions(["1", "1"]);
// evenAndOddPositions(["3", "-1", "-2", "-3"]);
// evenAndOddPositions(["1", "-5"]);
evenAndOddPositions(["5", "3", "-2", "8", "11", "-3"]);
// evenAndOddPositions(["0"]);