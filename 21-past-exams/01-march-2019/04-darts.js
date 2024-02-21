function darts(input) {
    let index = 0;
    let playerName = input[index];
    index++;

    let luckyMoves = 0;
    let unluckyMoves = 0;
    let startPoints = 301;

    for (let i = 0; i < input.length - 1; i++) {
        let area = input[index];
        index++;

        let currentPoints = Number(input[index]);
        index++;

        if (area === "Single") {

            if (currentPoints <= startPoints) {
                startPoints -= currentPoints;
                luckyMoves++;
            } else {
                unluckyMoves++
            }

        } else if (area === "Double") {
            currentPoints = currentPoints * 2;

            if (currentPoints <= startPoints) {
                startPoints -= currentPoints;
                luckyMoves++;
            } else {
                unluckyMoves++
            }

        } else if (area === "Triple") {
            currentPoints = currentPoints * 3;

            if (currentPoints <= startPoints) {
                startPoints -= currentPoints;
                luckyMoves++;
            } else {
                unluckyMoves++
            }

        } else if (area === "Retire") {
            console.log(`${playerName} retired after ${unluckyMoves} unsuccessful shots.`);
        }

        if (startPoints === 0) {
            console.log(`${playerName} won the leg with ${luckyMoves} shots.`);
            break;
        }
    }
}

darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);
darts(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"]);
darts(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]);