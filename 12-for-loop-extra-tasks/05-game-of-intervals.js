function gameOfIntervals(input) {
    let moves = Number(input[0]);

    let result = 0;

    let from0To9 = 0; // 1 number from the array
    let from10To19 = 0; // 1 number from the array
    let from20To29 = 0; // 2 numbers from the array
    let from30To39 = 0; // 1 number from the array
    let from40To50 = 0; // 3 numbers from the array
    let invalidNum = 0; // 2 numbers from the array

    // ^ These variables hold the number of numbers that fall into the corresponding intervals of the if-else construct.

    for(let i = 1; i <= moves; i++) {
        let num = Number(input[i]);

        if((num >= 0) && (num <= 9)) {
            result = result + (num * 0.2);
            from0To9++;

        } else if((num >= 10) && (num <= 19)) {
            result = result + (num * 0.3);
            from10To19++;

        } else if((num >= 20) && (num <= 29)) {
            result = result + (num * 0.4);
            from20To29++;

        } else if((num >= 30) && (num <= 39)) {
            result += 50;
            from30To39++;

        } else if((num >= 40) && (num <= 50)) {
            result += 100;
            from40To50++;

        } else if((num < 0) || (num > 50)) {
            result = result / 2;
            invalidNum++;
        }
    }

    let percentage0To9 = (from0To9 / moves) * 100;
    let percentage10To19 = (from10To19 / moves) * 100;
    let percentage20To29 = (from20To29 / moves) * 100;
    let percentage30To39 = (from30To39 / moves) * 100;
    let percentage40To50 = (from40To50 / moves) * 100;
    let percentageInvalid = (invalidNum / moves) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${percentage0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentage10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentage20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentage30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentage40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentageInvalid.toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);