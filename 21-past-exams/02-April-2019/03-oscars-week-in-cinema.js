function oscarsWeekInCinema(input) {
    let movie = input[0];
    let hall = input[1];
    let tickets = Number(input[2]);

    let totalPrice = 0;

    if(movie === "A Star Is Born") {

        if(hall === "normal") {
            totalPrice = tickets * 7.50;
        } else if(hall === "luxury") {
            totalPrice = tickets * 10.50;
        } else if(hall === "ultra luxury") {
            totalPrice = tickets * 13.50;
        }

    } else if(movie === "Bohemian Rhapsody") {

        if(hall === "normal") {
            totalPrice = tickets * 7.35;
        } else if(hall === "luxury") {
            totalPrice = tickets * 9.45;
        } else if(hall === "ultra luxury") {
            totalPrice = tickets * 12.75;
        }

    } else if(movie === "Green Book") {

        if(hall === "normal") {
            totalPrice = tickets * 8.15;
        } else if(hall === "luxury") {
            totalPrice = tickets * 10.25;
        } else if(hall === "ultra luxury") {
            totalPrice = tickets * 13.25;
        }

    } else if(movie === "The Favourite") {

        if(hall === "normal") {
            totalPrice = tickets * 8.75;
        } else if(hall === "luxury") {
            totalPrice = tickets * 11.55;
        } else if(hall === "ultra luxury") {
            totalPrice = tickets * 13.95;
        }
    }

    console.log(`${movie} -> ${totalPrice.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
oscarsWeekInCinema(["Green Book", "normal", "63"]);