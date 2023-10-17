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