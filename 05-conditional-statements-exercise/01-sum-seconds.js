function sumSeconds(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    let sumSec = n1 + n2 + n3; // Get the total seconds.

    let min = Math.floor(sumSec / 60); // Calculate the minutes.
    let seconds = sumSec % 60; // Calculate the seconds.

    if(seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);