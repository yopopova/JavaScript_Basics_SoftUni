function poolDay(input) {
    let people = Number(input[0]);
    let fee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalFee = people * fee;

    let peopleWantSunbeds = Math.ceil(people * 0.75);
    let sunbedsTotalPrice = peopleWantSunbeds * sunbedPrice;

    let neededUmbrellas = Math.ceil(people / 2);
    let umbrellasTotalPrice = neededUmbrellas * umbrellaPrice;

    let totalAmount = totalFee + sunbedsTotalPrice + umbrellasTotalPrice;

    console.log(`${totalAmount.toFixed(2)} lv.`);
}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);