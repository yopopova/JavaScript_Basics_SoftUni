function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);

    let buffer = "";

    for (let i = startNumber; i <= endNumber; i++) {
        let numberToString = i + " ";
        let numberToStringL = numberToString.length;

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
            buffer += numberToString + "";
        }
    }

    console.log(buffer);
}

equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456", "124000"]);
// equalSumsEvenOddPosition(["299900", "300000"]);
// equalSumsEvenOddPosition(["100115", "100120"]);