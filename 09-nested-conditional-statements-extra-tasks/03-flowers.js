function flowers(input) {
    let hrizantemiBr = Number(input[0]);
    let roziBr = Number(input[1]);
    let laletaBr = Number(input[2]);
    let season = input[3];
    let day = input[4];

    let hrizantemiPrice = 0;
    let roziPrice = 0;
    let laletaPrice = 0;

    let allFlowers = hrizantemiBr + roziBr + laletaBr;

    if((season === "Spring") || (season === "Summer")) {
        hrizantemiPrice = hrizantemiBr * 2.00;
        roziPrice = roziBr * 4.10;
        laletaPrice = laletaBr * 2.50;
    } else if((season === "Autumn") || (season === "Winter")) {
        hrizantemiPrice = hrizantemiBr * 3.75;
        roziPrice = roziBr * 4.50;
        laletaPrice = laletaBr * 4.15;
    }

    let totalFlowerPrice = hrizantemiPrice + roziPrice + laletaPrice;

    if(day === "Y") {
        totalFlowerPrice = totalFlowerPrice + (totalFlowerPrice * 0.15);
    }

    if((laletaBr > 7) && (season === "Spring")) {
        totalFlowerPrice = totalFlowerPrice - (totalFlowerPrice * 0.05);
    }

    if((roziBr >= 10) && (season === "Winter")) {
        totalFlowerPrice = totalFlowerPrice - (totalFlowerPrice * 0.10);
    }

    if(allFlowers > 20) {
        totalFlowerPrice = totalFlowerPrice - (totalFlowerPrice * 0.20);
    }

    let bouquetPrice = totalFlowerPrice + 2;
    
    console.log(bouquetPrice.toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);