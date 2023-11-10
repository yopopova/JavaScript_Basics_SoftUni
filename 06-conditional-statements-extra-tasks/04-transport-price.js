function transportPrice(input) {
    let kms = Number(input[0]);
    let dayTime = String(input[1]);
    let price = 0;

    if((kms < 20) && (dayTime === "day")) {
        price = (kms * 0.79) + 0.70;
    } else if((kms < 20) && (dayTime === "night")) {
        price = (kms * 0.90) + 0.70;
    }

    if(kms >= 20) {
        price = kms * 0.09;
    }

    if(kms >= 100) {
        price = kms * 0.06;
    }

    console.log(price.toFixed(2));
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);