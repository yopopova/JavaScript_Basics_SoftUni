function mobileOperator(input) {
    let contract = input[0];
    let contractType = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let fee = 0;
    let totalAmount = 0;

    if(contract === "one") {

        if(contractType === "Small") {
            fee = 9.98;
        } else if(contractType === "Middle") {
            fee = 18.99;
        } else if(contractType === "Large") {
            fee = 25.98;
        } else if(contractType === "ExtraLarge") {
            fee = 35.99;
        }

        if(internet === "yes") {

            if(fee <= 10) {
                fee = fee + 5.50;
            } else if(fee <= 30) {
                fee = fee + 4.35;
            } else if(fee > 30) {
                fee = fee + 3.85;
            }
        } else if(internet === "no") {
            fee = fee;
        }

        totalAmount = months * fee;

    } else if(contract === "two") {

        if(contractType === "Small") {
            fee = 8.58;
        } else if(contractType === "Middle") {
            fee = 17.09;
        } else if(contractType === "Large") {
            fee = 23.59;
        } else if(contractType === "ExtraLarge") {
            fee = 31.79;
        }

        if(internet === "yes") {

            if(fee <= 10) {
                fee = fee + 5.50;
            } else if(fee <= 30) {
                fee = fee + 4.35;
            } else if(fee > 30) {
                fee = fee + 3.85;
            }
        } else if(internet === "no") {
            fee = fee;
        }

        totalAmount = months * fee;
        totalAmount = (totalAmount * 96.25) / 100; // 96,25 = 100% - 3,75%;
    }

    console.log(`${totalAmount.toFixed(2)} lv.`);
}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"]);