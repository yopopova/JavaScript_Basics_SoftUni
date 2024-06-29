function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let sum = (puzzelsCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
    let toysCount = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(toysCount >= 50) {
        sum = sum * 0.75;
    }

    let sumAfterRent = sum * 0.9;

    if(sumAfterRent >= tripPrice) {
        console.log(`Yes! ${(sumAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - sumAfterRent).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);