function courierExpress(input) {
    let baggageKgs = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);

    let price = 0;

    if(serviceType === "standard") {

        if(baggageKgs < 1) {
            price = distanceKm * 0.03;
        } else if(baggageKgs < 10) {
            price = distanceKm * 0.05;
        } else if(baggageKgs < 40) {
            price = distanceKm * 0.10;
        } else if(baggageKgs < 90) {
            price = distanceKm * 0.15;
        } else if(baggageKgs < 150) {
            price = distanceKm * 0.20;
        }

    } else if(serviceType === "express") {

        if(baggageKgs < 1) {
            price = distanceKm * 0.03 + (0.03 * 0.8 * distanceKm * baggageKgs);
        } else if(baggageKgs < 10) {
            price = distanceKm * 0.05 + (0.05 * 0.4 * distanceKm * baggageKgs);
        } else if(baggageKgs < 40) {
            price = distanceKm * 0.10 + (0.10 * 0.05 * distanceKm * baggageKgs);
        } else if(baggageKgs < 90) {
            price = distanceKm * 0.15 + (0.15 * 0.02 * distanceKm * baggageKgs);
        } else if(baggageKgs < 150) {
            price = distanceKm * 0.20 + (0.20 * 0.01 * distanceKm * baggageKgs);
        }
    }

    console.log(`The delivery of your shipment with weight of ${baggageKgs.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

courierExpress(["1.5", "standard", "100"]);
courierExpress(["87", "express", "130"]);
courierExpress(["20", "standard", "349"]);