function lettersCombinations(input) {
    let startLetter = input[0].charCodeAt();
    let endLetter = input[1].charCodeAt();
    let exceptionLetter = input[2].charCodeAt();

    let counter = 0;
    let buffer = "";

    for(let a = startLetter; a <= endLetter; a++) {
        for(let b = startLetter; b <= endLetter; b++) {
            for(let c = startLetter; c <= endLetter; c++) {

                if(a !== exceptionLetter && b !== exceptionLetter && c !== exceptionLetter) {
                    let letterA = String.fromCharCode(a);
                    let letterB = String.fromCharCode(b);
                    let letterC = String.fromCharCode(c);

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