function easterBakery(input) {
    let brashnoPricePerKg = Number(input[0]);
    let brashnoKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let broiKoriYaica = Number(input[3]);
    let paketiMaya = Number(input[4]);

    let sugarPricePerKg = brashnoPricePerKg - (brashnoPricePerKg * 0.25);
    let koraYaicaPrice = brashnoPricePerKg * 1.1;
    let paketMayaPrice = sugarPricePerKg - (sugarPricePerKg * 0.8);

    let brashnoPrice = brashnoPricePerKg * brashnoKg;
    let sugarPrice = sugarPricePerKg * sugarKg;
    let eggsPrice = koraYaicaPrice * broiKoriYaica;
    let mayaPrice = paketMayaPrice * paketiMaya;

    let totalPrice = brashnoPrice + sugarPrice + eggsPrice + mayaPrice;

    console.log(totalPrice.toFixed(2));
}

easterBakery(["50", "10", "3.5", "6", "1"]);
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);