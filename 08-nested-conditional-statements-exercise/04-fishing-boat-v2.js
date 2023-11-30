function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);

    let needMoney = 0;

    switch(season) {
        case "Spring": needMoney = 3000; break;
        case "Summer":
        case "Autumn": needMoney = 4200; break;
        case "Winter": needMoney = 2600; break;
    }

    if(countFisherman <= 6) {
        needMoney = needMoney * 0.90;
    } else if(countFisherman >= 7 && countFisherman <= 11) {
        needMoney = needMoney * 0.85;
    } else {
        needMoney = needMoney * 0.75;
    }

    if(countFisherman % 2 === 0 && season != "Autumn") {
        needMoney = needMoney * 0.95;
    }

    let diff = Math.abs(budget - needMoney);

    if(budget >= needMoney) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
    
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);