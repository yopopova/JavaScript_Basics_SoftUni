function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.40);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.80);

    let strawberriesTotalPrice = strawberriesPrice * strawberriesQuantity;
    let raspberriesTotalPrice = raspberriesPrice * raspberriesQuantity;
    let orangesTotalPrice = orangesPrice * orangesQuantity;
    let bananasTotalPrice = bananasPrice * bananasQuantity;

    let totalSum = strawberriesTotalPrice + raspberriesTotalPrice + orangesTotalPrice + bananasTotalPrice;

    console.log(totalSum);
}