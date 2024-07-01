function movieProfit(input) {
    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPerc = Number(input[4]);

    let totalTicketsPrice = tickets * ticketPrice; // The price of all tickets for the day.

    let totalIncome = totalTicketsPrice * days; // The sum of all tickets for the specific days.

    let cinemaFee = totalIncome * cinemaPerc / 100; // The percentage for the cinema.
    let movieIncome = totalIncome - cinemaFee;

    console.log(`The profit from the movie ${movie} is ${movieIncome.toFixed(2)} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);
movieProfit(["Sofia Day", "1", "100", "5", "5"]);