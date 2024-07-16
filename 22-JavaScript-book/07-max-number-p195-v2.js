function biggestNumber(input) {

    // let biggestNum = 0; // If we leave the value of the biggestNum variable at 0 when we only have negative numbers in the array, it won't compare them, but will print 0 directly because that's the value we set it to and started with.
    let biggestNum = Number.NEGATIVE_INFINITY; // So we set it to be a number from minus (-) infinity. This is the smallest number.

    for (let i = 1; i < input.length; i++) { // If we write = after <, it means we're asking the program for an index that doesn't exist and the program won't execute.
        // ^ If an array has 3 elements, its length is 3, but it has no element in the 3rd position, only 0, 1, and 2.
        let currentNumber = Number(input[i]);

        if (currentNumber > biggestNum) { // If we want the smallest number, we reverse the sign from > to < and change NEGATIVE_INFINITY to POSITIVE_INFINITY above.
            biggestNum = currentNumber;
        }
    }

    console.log(biggestNum);
}

biggestNumber(["2", "100", "99"]);
biggestNumber(["3", "-10", "20", "-30"]);
biggestNumber(["4", "45", "-20", "7", "99"]);
biggestNumber(["1", "999"]);
biggestNumber(["2", "-1", "-2"]);