function worldSnookerChampionship(input) {
    let matchType = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let trophyPic = input[3];

    let ticketsPrice = 0;
    let trophyPicPrice = 0;

    if(matchType === "Quarter final") {

        if(ticketType === "Standard") {
            ticketsPrice = ticketsCount * 55.50;
        } else if(ticketType === "Premium") {
            ticketsPrice = ticketsCount * 105.20;
        } else if(ticketType === "VIP") {
            ticketsPrice = ticketsCount * 118.90;
        }

    } else if(matchType === "Semi final") {

        if(ticketType === "Standard") {
            ticketsPrice = ticketsCount * 75.88;
        } else if(ticketType === "Premium") {
            ticketsPrice = ticketsCount * 125.22;
        } else if(ticketType === "VIP") {
            ticketsPrice = ticketsCount * 300.40;
        }

    } else if(matchType === "Final") {

        if(ticketType === "Standard") {
            ticketsPrice = ticketsCount * 110.10;
        } else if(ticketType === "Premium") {
            ticketsPrice = ticketsCount * 160.66;
        } else if(ticketType === "VIP") {
            ticketsPrice = ticketsCount * 400;
        }
    }

    if(ticketsPrice > 4000) {
        ticketsPrice = ticketsPrice * 0.75;

    } else if(ticketsPrice > 2500) {
        ticketsPrice = ticketsPrice * 0.9;

        if(trophyPic === "Y") {
            trophyPicPrice = ticketsCount * 40;
        } else if(trophyPic === "N") {
            trophyPicPrice = trophyPicPrice;
        }
    } else {
        ticketsPrice = ticketsPrice;

        if(trophyPic === "Y") {
            trophyPicPrice = ticketsCount * 40;
        } else if(trophyPic === "N") {
            trophyPicPrice = trophyPicPrice;
        }
    }

    let totalAmount = ticketsPrice + trophyPicPrice;

    console.log(totalAmount.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);