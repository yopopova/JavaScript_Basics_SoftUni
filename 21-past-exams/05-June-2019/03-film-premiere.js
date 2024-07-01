function filmPremiere(input) {
    let movie = input[0];
    let extras = input[1];
    let ticketsCount = Number(input[2]);

    let extrasPrice = 0;
    let totalPrice = 0;

    if(movie === "John Wick") {

        if(extras === "Drink") {
            extrasPrice = 12;
        } else if(extras === "Popcorn") {
            extrasPrice = 15;
        } else if(extras === "Menu") {
            extrasPrice = 19;
        }

        totalPrice = ticketsCount * extrasPrice;

    } else if(movie === "Star Wars") {

        if(extras === "Drink") {
            extrasPrice = 18;
        } else if(extras === "Popcorn") {
            extrasPrice = 25;
        } else if(extras === "Menu") {
            extrasPrice = 30;
        }

        totalPrice = ticketsCount * extrasPrice;

        if(ticketsCount >= 4) {
            totalPrice = totalPrice * 0.7;
        } else {
            totalPrice = totalPrice;
        }

    } else if(movie === "Jumanji") {

        if(extras === "Drink") {
            extrasPrice = 9;
        } else if(extras === "Popcorn") {
            extrasPrice = 11;
        } else if(extras === "Menu") {
            extrasPrice = 14;
        }

        totalPrice = ticketsCount * extrasPrice;

        if(ticketsCount === 2) {
            totalPrice = totalPrice * 0.85;
        } else {
            totalPrice = totalPrice;
        }
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);
filmPremiere(["Jumanji", "Popcorn", "1"]);
filmPremiere(["Jumanji", "Menu", "3"]);