function averageNumber(input) {
    let allNums = Number(input[0]);
    
    let total = 0;

    for(let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i]);

        total += currentNum;
    }

    let average = total / allNums;
    console.log(average.toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);