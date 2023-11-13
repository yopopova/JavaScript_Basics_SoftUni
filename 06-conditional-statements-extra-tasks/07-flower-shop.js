function flowerShop(input) {
    let brMagnolii = Number(input[0]);
    let brZyumbyuli = Number(input[1]);
    let brRozi = Number(input[2]);
    let brKaktusi = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnolii = brMagnolii * 3.25;
    let zyumbyuli = brZyumbyuli * 4;
    let rozi = brRozi * 3.50;
    let kaktusi = brKaktusi * 8;

    let totalPriceFl = magnolii + zyumbyuli + rozi + kaktusi;
    let danak = totalPriceFl * 0.05;

    let totalMoney = totalPriceFl - danak;

    let leftMoney = Math.abs(giftPrice - totalMoney);
    let missMoney = Math.abs(totalMoney - giftPrice);

    if(giftPrice <= totalMoney) {
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(missMoney)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);