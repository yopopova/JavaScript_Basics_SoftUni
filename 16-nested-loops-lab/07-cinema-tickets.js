function cinemaTickets(input) {
    let index = 0;
    let inputLine = input[index];
    index++;

    let standartTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;

    while (inputLine !== "Finish") {
        let movieName = inputLine;

        let allTickets = Number(input[index]);
        index++;

        let availableTickets = allTickets;

        let ticketType = input[index];
        index++;

        while (ticketType !== "End") {

            if (ticketType === "standard") {
                standartTickets++;
            } else if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            availableTickets--;

            if (availableTickets === 0) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        let boughtTickets = allTickets - availableTickets;
        let percentageFull = (boughtTickets / allTickets) * 100;

        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        inputLine = input[index];
        index++;
    }

    let totalTickets = standartTickets + studentTickets + kidTickets;

    let studentPercantage = (studentTickets / totalTickets) * 100;
    let standartPercentage = (standartTickets / totalTickets) * 100;
    let kidPercentage = (kidTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercantage.toFixed(2)}% student tickets.`);
    console.log(`${standartPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}

// cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
// "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End",
"The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End",
"Amadeus", "3", "standard", "standard", "standard", "Finish"]);