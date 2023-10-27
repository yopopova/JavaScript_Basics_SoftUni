function sumSeconds(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    let sumSec = n1 + n2 + n3;

    let min = Math.floor(sumSec / 60);
    let seconds = sumSec % 60;

    if(seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}