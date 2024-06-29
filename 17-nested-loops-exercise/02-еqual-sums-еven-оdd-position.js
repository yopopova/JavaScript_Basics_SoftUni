function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);

    let buffer = ""; // We need a variable with which to print things on a single line, in this case buffer.

    for (let i = startNumber; i <= endNumber; i++) {
        let numberToString = i + " "; // This is how we convert the number to text. Here we also take a space in the quotation marks.
        let numberToStringL = numberToString.length; // Lock the length in a variable so the program doesn't calculate it every time.

        let sumOddPosition = 0;
        let sumEvenPosition = 0;

        for(let z = 0; z < numberToStringL; z++) {
            if(z % 2 === 0) {
                sumEvenPosition += Number(numberToString[z]);
            } else {
                sumOddPosition += Number(numberToString[z]);
            }
        }

        if(sumOddPosition === sumEvenPosition) {
            buffer += numberToString + ""; // This is how we paste the numbers to be on the same line, because in JS everything comes out one below the other.
            // ^ If we write numberToString + "" directly to console.log, it will still print them one below the other, which makes no sense.
        }
    }

    console.log(buffer);
}

equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456", "124000"]);
// equalSumsEvenOddPosition(["299900", "300000"]);
// equalSumsEvenOddPosition(["100115", "100120"]);