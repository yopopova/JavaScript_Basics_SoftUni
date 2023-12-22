function backToThePast(input) {
    let heritage = Number(input[0]);
    let endYear = Number(input[1]);

    let ageIvan = 18;
    let extraMoney = 0;

    for(let startYear = 1800; startYear <= endYear; startYear++) {

        if(startYear % 2 === 0) {
            heritage = heritage - 12000;
        } else {
            extraMoney = 50 * ageIvan;
            heritage = heritage - (12000 + extraMoney);
        }

        ageIvan++;
    }

    if(heritage < 0) {
        heritage = Math.abs(heritage);
        console.log(`He will need ${heritage.toFixed(2)} dollars to survive.`);
    } else {
        console.log(`Yes! He will live a carefree life and will have ${heritage.toFixed(2)} dollars left.`);
    }

}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);