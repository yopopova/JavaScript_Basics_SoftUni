function barcodeGenerator(input) {
    let startNum = input[0];
    let endNum = input[1];

    let startNum1 = Number(startNum[0]);
    let startNum2 = Number(startNum[1]);
    let startNum3 = Number(startNum[2]);
    let startNum4 = Number(startNum[3]);

    let endNum1 = Number(endNum[0]);
    let endNum2 = Number(endNum[1]);
    let endNum3 = Number(endNum[2]);
    let endNum4 = Number(endNum[3]);

    let buffer = "";

    for (let a = startNum1; a <= endNum1; a++) {
        for (let b = startNum2; b <= endNum2; b++) {
            for (let c = startNum3; c <= endNum3; c++) {
                for (let d = startNum4; d <= endNum4; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buffer += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }

    console.log(buffer);
}

// barcodeGenerator(["2345", "6789"]);
// barcodeGenerator(["3256", "6579"]);
barcodeGenerator(["1365", "5877"]);