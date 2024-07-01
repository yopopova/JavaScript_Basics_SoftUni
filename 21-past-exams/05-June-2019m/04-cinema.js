function cinema(input) {
    let index = 0;
    let hallCapacity = Number(input[index]); // The capacity of the hall will change down in when, so we need another variable spaceLeft to hold the value with the capacity of the hall.
    index++;

    let ticketPrice = 0; // The variable calculates the price of the tickets.
    let totalAmount = 0; // The variable calculates the final price.
    let allPeople = 0; // The variable all people who enter the hall.
    let spaceLeft = hallCapacity; // Holds the initial value of the hall's capacity.

    for(let i = 0; i < input.length - 1; i++) {
        let people = input[index];
        index++;

        if(people !== "Movie time!") {
            people = Number(input[index - 1]); // people = Number(people);

                if(people % 3 === 0) {
                    ticketPrice = (people * 5) - 5;
                } else {
                    ticketPrice = people * 5;
                }

                if(people > hallCapacity) {
                    console.log("The cinema is full.");
                    break;
                }
    
                totalAmount += ticketPrice; // On each iteration of the loop, we collect the final price from the tickets.
                allPeople += people; // On each iteration of the loop, we add up the total number of people who entered the hall.
                hallCapacity -= people; // On each spin of the loop, we decrement the seats in the hall with the people entering.

        } else {
            let diff = spaceLeft - allPeople; // Subtract all people who have entered the hall from the variable that holds the capacity of the hall.
            console.log(`There are ${diff} seats left in the cinema.`);
            break;
        }

    }

    console.log(`Cinema income - ${totalAmount} lv.`); // We print in the body of the function to output in both cases.
}

// cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// cinema(["50", "15", "10", "10", "15", "5"]);
// cinema(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);
// cinema(["50", "15", "15", "10", "9", "9"]);
cinema(["50", "10", "15", "15", "10", "9"]);