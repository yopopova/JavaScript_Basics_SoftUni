function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let totalPrice = 0;

    if(destination === "France") {

        if(dates === "21-23") {
            totalPrice = nights * 30;
        } else if(dates === "24-27") {
            totalPrice = nights * 35;
        } else if(dates === "28-31") {
            totalPrice = nights * 40;
        }

    } else if(destination === "Italy") {

        if(dates === "21-23") {
            totalPrice = nights * 28;
        } else if(dates === "24-27") {
            totalPrice = nights * 32;
        } else if(dates === "28-31") {
            totalPrice = nights * 39;
        }

    } else if(destination === "Germany") {

        if(dates === "21-23") {
            totalPrice = nights * 32;
        } else if(dates === "24-27") {
            totalPrice = nights * 37;
        } else if(dates === "28-31") {
            totalPrice = nights * 43;
        }
    }

    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);