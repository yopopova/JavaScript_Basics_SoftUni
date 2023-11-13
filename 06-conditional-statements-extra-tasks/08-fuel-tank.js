function fuelTank(input) {
    let fuelType = input[0];
    let liters = Number(input[1]);

    let fuel = fuelType.toLowerCase();

    if(fuel === "diesel" || fuel === "gasoline" || fuel === "gas") {

        if(liters < 25) {
            console.log(`Fill your tank with ${fuel}!`);
        } else {
            console.log(`You have enough ${fuel}.`);
        }

    } else {
        console.log("Invalid fuel!");
    }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);