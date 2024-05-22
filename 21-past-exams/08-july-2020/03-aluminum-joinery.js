function aluminumJoinery(input) {
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let deliveryType = input[2];

    let price = 0;

    if (joineryCount < 10) {
        console.log("Invalid order");

    } else if (joineryType === "90X130" || joineryType === "100X150" || joineryType === "130X180" || joineryType === "200X300") {
        if (joineryType === "90X130") {
            price = 110;

            if (joineryCount > 30 && joineryCount <= 60) {
                price = price * 0.95;
            } else if (joineryCount > 60) {
                price = price * 0.92;
            }

        } else if (joineryType === "100X150") {
            price = 140;

            if (joineryCount >= 40 && joineryCount <= 80) {
                price = price * 0.94;
            } else if (joineryCount > 80) {
                price = price * 0.90;
            }

        } else if (joineryType === "130X180") {
            price = 190;

            if (joineryCount >= 20 && joineryCount <= 50) {
                price = price * 0.93;
            } else if (joineryCount > 50) {
                price = price * 0.88;
            }

        } else if (joineryType === "200X300") {
            price = 250;

            if (joineryCount >= 25 && joineryCount <= 50) {
                price = price * 0.91;
            } else if (joineryCount > 50) {
                price = price * 0.86;
            }
        }

        price = price * joineryCount;

        if(deliveryType === "With delivery") {
            price = price + 60;
        }

        if(joineryCount > 99) {
            price = price * 0.96;
        }

        console.log(`${price.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);