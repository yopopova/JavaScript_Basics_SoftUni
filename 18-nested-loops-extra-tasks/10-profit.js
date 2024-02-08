function profit(input) {
    let oneLevCoins = Number(input[0]);
    let twoLevaCoins = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let sum = Number(input[3]);

    for(let a = 0; a <= oneLevCoins; a++) {
        for(let b = 0; b <= twoLevaCoins; b++) {
            for(let c = 0; c <= fiveLeva; c++) {
                let currentSum = (a * 1) + (b * 2) + (c * 5);

                if(currentSum === sum) {
                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

// profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);