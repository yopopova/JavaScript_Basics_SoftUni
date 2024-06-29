function dayOfWeek(input) {
    let day = Number(input[0]);

    switch(day) {
        case 1 : console.log("Monday"); break;
        case 2 : console.log("Tuesday"); break;
        case 3 : console.log("Wednesday"); break;
        case 4 : console.log("Thursday"); break;
        case 5 : console.log("Friday"); break;
        case 6 : console.log("Saturday"); break;
        case 7 : console.log("Sunday"); break;
        default: console.log("Error"); break; // It's nice to have break after default too! Default can be at the beginning and at the end of the code.
    }
}

dayOfWeek(["1"]);
dayOfWeek(["2"]);
dayOfWeek(["3"]);
dayOfWeek(["4"]);
dayOfWeek(["5"]);
dayOfWeek(["6"]);
dayOfWeek(["7"]);
dayOfWeek(["-1"]);