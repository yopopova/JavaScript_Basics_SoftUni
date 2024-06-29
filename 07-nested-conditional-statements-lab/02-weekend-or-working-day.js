function weekendOrWorkingDay(input) {
    let day = input[0];

    switch(day) {
        case "Monday" :
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" : console.log("Working day"); break; // We only add the console to the last line, we don't need to write them all.
        case "Saturday" :
        case "Sunday" : console.log("Weekend"); break;
        default: console.log("Error"); break;
    }
}

weekendOrWorkingDay(["Monday"]);
weekendOrWorkingDay(["Sunday"]);
weekendOrWorkingDay(["April"]);