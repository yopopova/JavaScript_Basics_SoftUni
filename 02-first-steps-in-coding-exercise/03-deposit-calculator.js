function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearPercent = Number(input[2]);

    let divident = depositAmount * (yearPercent / 100);
    let dividentForMonth = divident / 12;
    let sum = depositAmount + (depositTerm * dividentForMonth);

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);