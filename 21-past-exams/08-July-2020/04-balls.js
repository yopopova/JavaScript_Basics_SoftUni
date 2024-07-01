function balls(input) {
    let index = 0;
    let allBalls = Number(input[index]);
    index++;

    let points = 0; // Will add up the points for each ball of a different color.

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    for(let i = 0; i < allBalls; i++) {
        let color = input[index];
        index++;

        if(color === "red") {
            points += 5;
            redBalls++;
        } else if(color === "orange") {
            points += 10;
            orangeBalls++;
        } else if(color === "yellow") {
            points += 15;
            yellowBalls++;
        } else if(color === "white") {
            points += 20;
            whiteBalls++;
        } else if(color === "black") {
            points = points / 2;
            points = Math.floor(points); // From Math library. are always exported on a new line, otherwise they create irregularities in the code.
            blackBalls++;
        } else {
            otherBalls++;
        }
    }

    console.log(`Total points: ${points}`);;
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);