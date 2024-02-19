function skeleton(input) {
    let controlMin = Number(input[0]);
    let controlSec = Number(input[1]);
    let wayInMeters = Number(input[2]);
    let secForOnehundredMeters = Number(input[3]);

    let recordSeconds = (controlMin * 60) + controlSec;

    let decreasingTime = (wayInMeters / 120) * 2.5;

    let marinTime = (wayInMeters / 100) * secForOnehundredMeters - decreasingTime;

    if(marinTime <= recordSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(marinTime - recordSeconds).toFixed(3)} second slower.`);
    }

}

skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);