function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.5;

    let allPaint = paint + (paint * 0.1);
    let paintPrice = allPaint * 14.5;

    let razreditelPrice = razreditel * 5;

    let materialsAmount = nylonPrice + paintPrice + razreditelPrice + 0.4;

    let craftsmanFeePerHour = materialsAmount * 0.3;
    let craftmanPayment = craftsmanFeePerHour * hours;

    let totalAmount = materialsAmount + craftmanPayment;

    console.log(`Total expenses: ${totalAmount.toFixed(2)} lv.`);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
repainting(["90", "99", "28", "9"]);