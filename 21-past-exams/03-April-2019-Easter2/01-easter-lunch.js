function easterLunch(input) {
    let broiKozunaci = Number(input[0]);
    let broiKoriYaica = Number(input[1]);
    let sweetsKg = Number(input[2]);

    let kozunaciPrice = broiKozunaci * 3.2;
    let eggsPrice = broiKoriYaica * 4.35;
    let kurabiiPrice = sweetsKg * 5.4;

    let eggsCount = broiKoriYaica * 12;

    let eggsPaintPrice = eggsCount * 0.15;

    let lunchPrice = kozunaciPrice + eggsPrice + kurabiiPrice + eggsPaintPrice;

    console.log(lunchPrice.toFixed(2));
}

easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);
easterLunch(["2", "3", "2"]);