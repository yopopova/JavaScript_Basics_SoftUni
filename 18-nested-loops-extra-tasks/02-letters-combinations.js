function lettersCombinations(input) {
    let startLetter = input[0].charCodeAt(); // So we take the letter from the array and convert it to its corresponding value from the ASCII table.
    let endLetter = input[1].charCodeAt(); // So we take the letter from the array and convert it to its corresponding value from the ASCII table.
    let exceptionLetter = input[2].charCodeAt(); // So we take the letter from the array and convert it to its corresponding value from the ASCII table.

    let counter = 0;
    let buffer = "";

    for(let a = startLetter; a <= endLetter; a++) {
        for(let b = startLetter; b <= endLetter; b++) {
            for(let c = startLetter; c <= endLetter; c++) {

                if(a !== exceptionLetter && b !== exceptionLetter && c !== exceptionLetter) {
                    let letterA = String.fromCharCode(a); // Here we convert the number from the ASCII table back to a letter to print it.
                    let letterB = String.fromCharCode(b); // Here we convert the number from the ASCII table back to a letter to print it.
                    let letterC = String.fromCharCode(c); // Here we convert the number from the ASCII table back to a letter to print it.

                    buffer += "" + letterA + letterB + letterC + " ";
                    counter++;
                }
            }
        }
    }

    console.log(buffer + counter);
}

lettersCombinations(["a", "c", "b"]);
lettersCombinations(["f", "k", "h"]);
lettersCombinations(["a", "c", "z"]);