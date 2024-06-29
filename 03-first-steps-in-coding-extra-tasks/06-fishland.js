function fishland(input) {
    let skumriyaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let pKg = Number(input[2]);
    let sKg = Number(input[3]);
    let mKg = Number(input[4]);

    let palamudPrice = skumriyaPrice + (skumriyaPrice * 0.6);
    let safridPrice = cacaPrice + (cacaPrice * 0.8);
    let midiPrice = mKg * 7.50;

    let palamudTotal = pKg * palamudPrice;
    let safridTotal = sKg * safridPrice;

    let finalAmount = palamudTotal + safridTotal + midiPrice;

    console.log(finalAmount.toFixed(2));
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);
fishland(["7.79", "5.35", "9.3", "0", "0"]);