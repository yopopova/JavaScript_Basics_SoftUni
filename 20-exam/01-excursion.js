function excursion(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let allNights = nights * 20;
    let transportPrice = transportCards * 1.60;
    let museumPrice = museumTickets * 6;

    let pricePerPerson = allNights + transportPrice + museumPrice;
    let totalPrice = people * pricePerPerson;
    let finalPrice = totalPrice + (totalPrice * 0.25);
    
    console.log(finalPrice.toFixed(2));
}

excursion(["20", "14", "30", "6"]);
excursion(["131", "9", "33", "46"]);