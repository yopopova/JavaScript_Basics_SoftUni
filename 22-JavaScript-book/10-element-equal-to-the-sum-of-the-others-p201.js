function elementEqualToTheSumOfTheOthers(input) {
    let index = 0;
    let nums = Number(input[index]);
    index++;

    let maxNum = 0;
    let sum = 0;

    for (let i = 0; i < nums; i++) {
        let n = Number(input[index]);
        index++;

        if (n > maxNum) {
            maxNum = n;
        }

        sum += n;
    }

    sum = sum - maxNum;

    if (sum === maxNum) {
        console.log(`Yes Sum = ${sum}`);
    } else {
        let diff = Math.abs(maxNum - sum);
        console.log(`No Diff = ${diff}`);
    }
}

elementEqualToTheSumOfTheOthers(["7", "3", "4", "1", "1", "2", "12", "1"]);
// elementEqualToTheSumOfTheOthers(["3", "1", "1", "10"]);
// elementEqualToTheSumOfTheOthers(["3", "1", "1", "1"]);
// elementEqualToTheSumOfTheOthers(["3", "5", "5", "1"]);
// elementEqualToTheSumOfTheOthers(["4", "6", "1", "2", "3"]);