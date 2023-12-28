function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;

    let electricity = 0;
    let water = 20;
    let internet = 15;
    let others = 0;

    for(let i = 0; i < months; i++) {
        let electricityBill = Number(input[index]);
        index++

        electricity += electricityBill;
    }

    water = water * months;
    internet = internet * months;

    let otherBillsPercent = (electricity + water + internet) * 0.2;
    others = electricity + water + internet + otherBillsPercent;

    let average = (electricity + water + internet + others) / months;
    
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
// bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);