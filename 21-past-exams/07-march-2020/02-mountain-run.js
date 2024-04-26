function mountainRun(input) {
    let record = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerSecondForOneMeter = Number(input[2]);

    let georgiTime = distanceInMeters * timePerSecondForOneMeter;

    let timeSlow = Math.floor(distanceInMeters / 50) * 30;

    let finishTime = georgiTime + timeSlow;

    let diff = Math.abs(record - finishTime);

    if(finishTime < record) {
        console.log(`Yes! The new record is ${finishTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);