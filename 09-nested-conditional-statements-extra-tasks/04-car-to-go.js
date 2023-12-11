function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;

    if(budget <= 100) {
        console.log("Economy class");

        if(season === "Summer") {
            price = budget * 0.35;
            console.log(`Cabrio - ${price.toFixed(2)}`);
        } else if(season === "Winter") {
            price = budget * 0.65;
            console.log(`Jeep - ${price.toFixed(2)}`);
        }

    } else if((budget > 100) && (budget <= 500)) {
        console.log("Compact class");

        if(season === "Summer") {
            price = budget * 0.45;
            console.log(`Cabrio - ${price.toFixed(2)}`);
        } else if(season === "Winter") {
            price = budget * 0.80;
            console.log(`Jeep - ${price.toFixed(2)}`);
        }

    } else {
        console.log("Luxury class");
        price = budget * 0.90;
        console.log(`Jeep - ${price.toFixed(2)}`);

    }

}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["99.99", "Summer"]);
carToGo(["70.50", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["1010", "Winter"]);