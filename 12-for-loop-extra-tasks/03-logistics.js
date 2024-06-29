function logistics(input) {
    let numLoads = Number(input[0]); // The total number of loads to transport.

    let minibus = 0;
    let truck = 0;
    let train = 0;

    let minibusPrice = 0; // The variable will hold the final price for the tons transported by minibus.
    let truckPrice = 0; // The variable will hold the final price for the tons transported by truck.
    let trainPrice = 0; // The variable will hold the final price for the tons transported by train.

    let minibusTons = 0; // The variable will hold the total number of tons transported by minibus.
    let truckTons = 0; // The variable will hold the total number of tons transported by truck.
    let trainTons = 0; // The variable will hold the total number of tons transported by train.

    let allInputTons = 0;

    let averagePricePerTon = 0;

    for(let i = 1; i < input.length; i++) {
        let tons = Number(input[i]); // We use the variable to capture the tonnage of each load to pass it through the if-else check.

        if(tons <= 3) {
            minibus = tons * 200;
            minibusPrice += minibus;
            minibusTons += tons;

        } else if((tons >= 4) && (tons <= 11)) {
            truck = tons * 175;
            truckPrice += truck;
            truckTons += tons;

        } else {
            train = tons * 120;
            trainPrice += train;
            trainTons += tons;
        }

        allInputTons += tons; // The variable holds the sum of all tones, equal to 25 (at the first input), which enter by condition from the input.

        averagePricePerTon = (minibusPrice + truckPrice + trainPrice) / allInputTons; // The average price per ton of freight transported.
    }

    console.log(averagePricePerTon.toFixed(2));
    console.log(`${((minibusTons / allInputTons) * 100).toFixed(2)}%`);
    console.log(`${((truckTons / allInputTons) * 100).toFixed(2)}%`);
    console.log(`${((trainTons / allInputTons) * 100).toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
// logistics(["5", "2", "10", "20", "1", "7"]);