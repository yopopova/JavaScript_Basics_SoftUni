function foodDelivery(input) {
    let chickenMenusCount = Number(input[0]);
    let fishMenusCount = Number(input[1]);
    let vegetarianMenusCount = Number(input[2]);

    let chickenMenuPrice = chickenMenusCount * 10.35;
    let fishMenuPrice = fishMenusCount * 12.40;
    let vegetarianMenuPrice = vegetarianMenusCount * 8.15;

    let totalMenusPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessert = totalMenusPrice * 0.2;
    let deliveryPrice = 2.50;

    let total = totalMenusPrice + dessert + deliveryPrice;

    console.log(`Total: ${total.toFixed(2)}`);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["10", "0", "6"]);
foodDelivery(["1", "1", "1"]);