function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;

    let priceForAllNights = 0;

    if(roomType === "room for one person") {
        priceForAllNights = nights * 18;

    } else if(roomType === "apartment") {

        if(nights < 10) {
            priceForAllNights = (nights * 25) * 0.7;
        } else if(nights >= 10 && nights <= 15) {
            priceForAllNights = (nights * 25) * 0.65;
        } else if(nights > 15) {
            priceForAllNights = (nights * 25) * 0.5;
        }

    } else if(roomType === "president apartment") {

        if(nights < 10) {
            priceForAllNights = (nights * 35) * 0.9;
        } else if(nights >= 10 && nights <= 15) {
            priceForAllNights = (nights * 35) * 0.85;
        } else if(nights > 15) {
            priceForAllNights = (nights * 35) * 0.8;
        }

    }

    if(feedback === "positive") {
        priceForAllNights = priceForAllNights * 1.25;
    } else if(feedback === "negative") {
        priceForAllNights = priceForAllNights * 0.9;
    }

    console.log(`${priceForAllNights.toFixed(2)}`);
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);