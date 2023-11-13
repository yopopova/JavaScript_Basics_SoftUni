function fuelTankTwo(input) {
    let fuelType = input[0];
    let fuelLiters = Number(input[1]);
    let clubCard = input[2];

    let gasolinePrice = fuelLiters * 2.22;
    let dieselPrice = fuelLiters * 2.33;
    let gasPrice = fuelLiters * 0.93;

    let finalPrice = 0;

    if(clubCard === "Yes") {

        if(fuelType === "Gasoline") {
            finalPrice = fuelLiters * (2.22 - 0.18);
        }
        
        if(fuelType === "Diesel") {
            finalPrice = fuelLiters * (2.33 - 0.12);
        }

        if(fuelType === "Gas") {
            finalPrice = fuelLiters * (0.93 - 0.08);
        }

    } else {

        if(fuelType === "Gasoline") {
            finalPrice = gasolinePrice;
        }
        
        if(fuelType === "Diesel") {
            finalPrice = dieselPrice;
        }

        if(fuelType === "Gas") {
            finalPrice = gasPrice;
        }

    }
    

    if((fuelLiters >= 20) && (fuelLiters <= 25)) {
        finalPrice = finalPrice - (finalPrice * 0.08);
    } else if(fuelLiters > 25) {
        finalPrice = finalPrice - (finalPrice * 0.1);
    } else {
        finalPrice = finalPrice;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`);
}

fuelTankTwo(["Gas", "30", "Yes"]);
fuelTankTwo(["Gasoline", "25", "No"]);
fuelTankTwo(["Diesel", "19", "No"]);