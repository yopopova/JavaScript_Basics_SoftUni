function specialNumbers(input) {
    let n = Number(input[0]);

    let buffer = ""; // Collect all special numbers.

    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d <= 9; d++) {
                   if(n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                    buffer += "" + a + b + c + d + " "; // We must have an empty string here, otherwise a mathematical addition will occur and the result will be different.
                    // ^ Finally we add an empty string again to have a space between the numbers.
                   }
                }
            }
        }
    }

    console.log(buffer);
}

specialNumbers(["3"]);