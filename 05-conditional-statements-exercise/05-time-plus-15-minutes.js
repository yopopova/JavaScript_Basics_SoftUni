function timePlusMinutes(input) {
    let incomeH = Number(input[0]);
    let incomeM = Number(input[1]);

    let totalTimeInMin = (incomeH * 60) + incomeM; // We multiply the hours by 60 to convert them to minutes and add the remaining minutes to them.
    totalTimeInMin = totalTimeInMin + 15; // Add the extra 15 minutes to all minutes.

    let h = Math.floor(totalTimeInMin / 60);
    let m = totalTimeInMin % 60;

    if(h > 23) {
        h = 0;
    }

    if(m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
}

timePlusMinutes(["1", "46"]);
timePlusMinutes(["0", "01"]);
timePlusMinutes(["23", "59"]);
timePlusMinutes(["11", "08"]);
timePlusMinutes(["12", "49"]);