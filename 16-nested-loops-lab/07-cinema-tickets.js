function cinemaTickets(input) {
    let index = 0;
    let inputLine = input[index];
    index++;

    // With finish is the external counter that means the movies have finished.
    // With end is the internal counter that means free seats have ended.

    let standartTickets = 0; // Counter.
    let studentTickets = 0; // Counter.
    let kidTickets = 0; // Counter.

    while (inputLine !== "Finish") { // Here we enter a specific movie.
        let movieName = inputLine;

        let allTickets = Number(input[index]);
        index++;

        let availableTickets = allTickets;

        let ticketType = input[index];
        index++;

        while (ticketType !== "End") { // Here we enter a specific ticket type.

            if (ticketType === "standard") {
                standartTickets++;
            } else if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            availableTickets--; // We decrement the number of free tickets each time a ticket is bought on the loop.

            if (availableTickets === 0) { // If the tickets become 0, we need to break the loop because there's no point in looping.
                break;
            }

            ticketType = input[index];
            index++;
        }

        let boughtTickets = allTickets - availableTickets; // To see how many tickets have been purchased.
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