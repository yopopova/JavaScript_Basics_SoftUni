function footballKit(input) {
    let tshirtPrice = Number(input[0]);
    let goalPrice = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let trainersPrice = (tshirtPrice + shortsPrice) * 2;

    let totalPrice = tshirtPrice + shortsPrice + socksPrice + trainersPrice;
    let finalPrice = totalPrice - (totalPrice * 0.15);

    if(finalPrice >= goalPrice) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    } else {
        let diff = goalPrice - finalPrice;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}

footballKit(["25", "100"]);
// footballKit(["55", "310"]);
// footballKit(["59.99", "500"]);