function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let appPrice = 0;

    if(month == "May" || month == "October") {
        studioPrice = 50;
        appPrice = 65;
    } else if(month == "June" || month == "September") {
        studioPrice = 75.20;
        appPrice = 68.70;
    } else if(month == "July" || month == "August") {
        studioPrice = 76;
        appPrice = 77;
    }

    if((month == "May" || month == "October") && ((nights > 7) && (nights <= 14))) {
        studioPrice = studioPrice * 0.95;

    } else if((month == "May" || month == "October") && nights > 14) {
        studioPrice = studioPrice * 0.7;

    } else if((month == "June" || month == "September") && nights > 14) {
        studioPrice = studioPrice * 0.8;
    }

    if(nights > 14) {
        appPrice = appPrice * 0.9;
    }

    let appTotalPrice = appPrice * nights;
    let studioTotalPrice = studioPrice * nights;

    console.log(`Apartment: ${appTotalPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotalPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);