function sleepyTomCat(input) {
    let holidays = Number(input[0]);

    let workDays = 365 - holidays;
    let allPlayTime = (workDays * 63) + (holidays * 127);

    let diffPlayTimeNorm = Math.abs(30000 - allPlayTime);

    let hours = Math.floor(diffPlayTimeNorm / 60);
    let min = diffPlayTimeNorm % 60;

    if(allPlayTime > 30000) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${min} minutes more for play`)
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${min} minutes less for play`)
    }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);