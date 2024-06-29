function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecForMeter = Number(input[2]);

    let slow = Math.floor(distanceInM / 15);

    let result = distanceInM * timeInSecForMeter;
    result = result + (slow * 12.5);

    if(result < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(result - recordInSec);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);