function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let batchCount = Number(input[2]);

    let price = 0;

    if(eggsSize === "Large") {

        if(eggsColor === "Red") {
            price = batchCount * 16;
        } else if(eggsColor === "Green") {
            price = batchCount * 12;
        } else if(eggsColor === "Yellow") {
            price = batchCount * 9;
        }

    } else if(eggsSize === "Medium") {

        if(eggsColor === "Red") {
            price = batchCount * 13;
        } else if(eggsColor === "Green") {
            price = batchCount * 9;
        } else if(eggsColor === "Yellow") {
            price = batchCount * 7;
        }

    } else if(eggsSize === "Small") {

        if(eggsColor === "Red") {
            price = batchCount * 9;
        } else if(eggsColor === "Green") {
            price = batchCount * 8;
        } else if(eggsColor === "Yellow") {
            price = batchCount * 5;
        }
    }

    let totalPrice = price * 0.65;

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"]);