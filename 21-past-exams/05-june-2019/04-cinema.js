function cinema(input) {
    let index = 0;
    let hallCapacity = Number(input[index]);
    index++;

    let ticketPrice = 0;
    let totalAmount = 0;
    let allPeople = 0;
    let spaceLeft = hallCapacity;

    for(let i = 0; i < input.length - 1; i++) {
        let people = input[index];
        index++;

        if(people !== "Movie time!") {
            people = Number(input[index - 1]);

                if(people % 3 === 0) {
                    ticketPrice = (people * 5) - 5;
                } else {
                    ticketPrice = people * 5;
                }

                if(people > hallCapacity) {
                    console.log("The cinema is full.");
                    break;
                }
    
                totalAmount += ticketPrice;
                allPeople += people;
                hallCapacity -= people;

        } else {
            let diff = spaceLeft - allPeople;
            console.log(`There are ${diff} seats left in the cinema.`);
            break;
        }

    }

    console.log(`Cinema income - ${totalAmount} lv.`);
}

// cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// cinema(["50", "15", "10", "10", "15", "5"]);
// cinema(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);
// cinema(["50", "15", "15", "10", "9", "9"]);
cinema(["50", "10", "15", "15", "10", "9"]);