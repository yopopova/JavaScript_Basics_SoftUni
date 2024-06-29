function matchTickets(input) {
    let budget = Number(input[0]);
    let ticketType = String(input[1]);
    let people = Number(input[2]);

    let transportMoney = 0;

    if((people >= 1) && (people <= 4)) {
        transportMoney = budget * 0.75;
    } else if((people >= 5) && (people <= 9)) {
        transportMoney = budget * 0.60;
    } else if((people >= 10) && (people <= 24)) {
        transportMoney = budget * 0.50;
    } else if((people >= 25) && (people <= 49)) {
        transportMoney = budget * 0.40;
    } else if(people >= 50) {
        transportMoney = budget * 0.25;
    }

    let ticketPrice = 0;

    if(ticketType === "Normal") {
        ticketPrice = people * 249.99;
    } else if(ticketType === "VIP") {
        ticketPrice = people * 499.99;
    }

    let totalAmount = transportMoney + ticketPrice;

    let moneyLeft = budget - totalAmount;
    let moneyMiss = totalAmount - budget;

    if(budget > totalAmount) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyMiss.toFixed(2)} leva.`);
    }
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);