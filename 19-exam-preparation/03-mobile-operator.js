function mobileOperator(input) {
    let duration = input[0];
    let type = input[1];
    let internetStatus = input[2];
    let monthsForPayment = Number(input[3]);

    let totalPrice = 0;
    let price = 0;

    if(duration === "one") {

        switch(type) {
            case "Small": price = 9.98; break;
            case "Middle": price = 18.99; break;
            case "Large": price = 25.98; break;
            case "ExtraLarge": price = 35.99; break;
        }

    } else if(duration === "two") {

        switch(type) {
            case "Small": price = 8.58; break;
            case "Middle": price = 17.09; break;
            case "Large": price = 23.59; break;
            case "ExtraLarge": price = 31.79; break;
        }

    }

    if(internetStatus === "yes") {
        if(price <= 10) {
            price = price + 5.50;
        } else if(price <= 30) {
            price = price + 4.35;
        } else if(price > 30) {
            price = price + 3.85;
        }
    }

    if(duration === "two") {
        price = price * 0.9625;
    }

    totalPrice = price * monthsForPayment;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

mobileOperator(["one", "Small", "yes", "10"]);