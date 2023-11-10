function firm(input) {
    let neededHours = Number(input[0]);
    let days = Number(input[1]);
    let staffNumber = Number(input[2]);

    let workDays = days - (days * 0.1);
    let workHours = workDays * 8;

    let outOfWorkHours = (days * 2) * staffNumber;
    let totalHours = Math.floor(workHours + outOfWorkHours);

    let diff = Math.abs(neededHours - totalHours);

    if(neededHours > totalHours) {
        console.log(`Not enough time!${diff} hours needed.`);
    } else {
        console.log(`Yes!${diff} hours left.`);
    }
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
firm(["50", "5", "2"]);