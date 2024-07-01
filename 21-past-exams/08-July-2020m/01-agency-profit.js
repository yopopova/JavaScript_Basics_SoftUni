function agencyProfit(input) {
    let company = input[0];
    let adultTicketsCount = Number(input[1]);
    let childrenTicketsCount = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let childrenTicketPrice = adultTicketPrice - (adultTicketPrice * 0.7);

    let finalAdultTicketPrice = adultTicketPrice + serviceFee;
    let finalChildrenTicketPrice = childrenTicketPrice + serviceFee;

    let adultTickets = finalAdultTicketPrice * adultTicketsCount;
    let childrenTickets = finalChildrenTicketPrice * childrenTicketsCount;

    let amount = adultTickets + childrenTickets;

    let agencyProfit = amount * 0.2;

    console.log(`The profit of your agency from ${company} tickets is ${agencyProfit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);