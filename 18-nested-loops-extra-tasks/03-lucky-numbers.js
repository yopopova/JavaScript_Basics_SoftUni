function luckyNumbers(input) {
    let n = Number(input[0]);

    let buffer = "";

    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d <= 9; d++) {
                    if(a + b === c + d) {
                        if(n % (a + b) === 0) {
                            buffer += "" + a + b + c + d + " ";
                        }
                    }
                }
            }
        }
    }

    console.log(buffer);
}

luckyNumbers(["3"]);
// luckyNumbers(["7"]);
// luckyNumbers(["24"]);