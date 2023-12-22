function logistics(input) {
    let numLoads = Number(input[0]);

    let minibus = 0;
    let truck = 0;
    let train = 0;

    let minibusPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;

    let minibusTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    let allInputTons = 0;

    let averagePricePerTon = 0;

    for(let i = 1; i < input.length; i++) {
        let tons = Number(input[i]);

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

        allInputTons += tons;

        averagePricePerTon = (minibusPrice + truckPrice + trainPrice) / allInputTons;
    }

    console.log(averagePricePerTon.toFixed(2));
    console.log(`${((minibusTons / allInputTons) * 100).toFixed(2)}%`);
    console.log(`${((truckTons / allInputTons) * 100).toFixed(2)}%`);
    console.log(`${((trainTons / allInputTons) * 100).toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
// logistics(["5", "2", "10", "20", "1", "7"]);