function excursionSale(input) {
    let index = 0;
    let seaTripsCount = Number(input[index]);
    index++;

    let mountainTripsCount = Number(input[index]);
    index++;

    let seaTripPrice = 680;
    let mountainTripPrice = 499;

    let price = 0;

    let command = input[index];
    index++;

    while (true) {
        let destination = command;

        if (destination === "Stop") {
            break;
        }

        if (destination === "sea" && seaTripsCount !== 0) {
            price += seaTripPrice;
            seaTripsCount--;
        } else if (destination === "mountain" && mountainTripsCount !== 0) {
            price += mountainTripPrice;
            mountainTripsCount--;
        }

        if(seaTripsCount === 0 && mountainTripsCount === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }

        command = input[index];
        index++;
    }

    console.log(`Profit: ${price} leva.`);
}

excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);