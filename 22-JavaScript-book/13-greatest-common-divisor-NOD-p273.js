// The problem is solved by Euclid's algorithm.

function greatestCommonDivisor(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    while (b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    console.log("GCD = " + a);
}

greatestCommonDivisor(["24", "16"]);
greatestCommonDivisor(["67", "18"]);
greatestCommonDivisor(["12", "24"]);
greatestCommonDivisor(["15", "9"]);
greatestCommonDivisor(["10", "10"]);
greatestCommonDivisor(["100", "88"]);