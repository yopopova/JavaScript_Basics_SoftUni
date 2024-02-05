function uniquePinCodes(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    for(let a = 2; a <= firstNum; a += 2) {
        for(let b = 2; b <= secondNum; b++) {
            for(let c = 2; c <= thirdNum; c += 2) {
                if(b === 2 || b === 3 || b === 5 || b === 7) {
                    console.log(`${a} ${b} ${c}`);
                }
            }
        }
    }
}

uniquePinCodes(["3", "5", "5"]);
uniquePinCodes(["8", "2", "8"]);