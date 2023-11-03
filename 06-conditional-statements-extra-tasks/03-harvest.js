function harvest(input) {
    let vineyardMeters = Number(input[0]);
    let grapesForMeter = Number(input[1]);
    let neededWineLiters = Number(input[2]);
    let staffNumber = Number(input[3]);

    let grapes = vineyardMeters * grapesForMeter;
    let wineLiters = (grapes * 0.4) / 2.5;

    let diff = Math.abs(neededWineLiters - wineLiters);

    let wineForPerson = diff / staffNumber;

    if(wineLiters < neededWineLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForPerson)} liters per person.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);