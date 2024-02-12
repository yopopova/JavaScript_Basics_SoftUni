function easterLunch(input) {
    let easterBread = Number(input[0]);
    let eggshells = Number(input[1]);
    let sweetsInKg = Number(input[2]);

    let priceForEasterBread = easterBread * 3.20;
    let priceForEggshells = eggshells * 4.35;
    let priceForSweets = sweetsInKg * 5.40;
    let priceForAllEggs = (eggshells * 12) * 0.15;

    let total = priceForEasterBread + priceForEggshells + priceForSweets + priceForAllEggs;

    console.log(total.toFixed(2));
}

easterLunch(["3", "2", "3"]);