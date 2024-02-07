function weddingSeats(input) {
    let lastSector = input[0];
    let firstSectorRows = Number(input[1]);
    let oddRowSeats = Number(input[2]);

    let startSector = "A";
    let startSeat = "a".charCodeAt(0);

    let totalSeats = 0;

    for (let sector = startSector.charCodeAt(0); sector <= lastSector.charCodeAt(0); sector++) {
        for (let row = 1; row <= firstSectorRows; row++) {
            if (row % 2 !== 0) {
                for (let seat = startSeat; seat < startSeat + oddRowSeats; seat++) {
                    let currentCapitalLetter = String.fromCharCode(sector);
                    let currentSmallLetter = String.fromCharCode(seat);
                    console.log(`${currentCapitalLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            } else {
                for (let seat = startSeat; seat < startSeat + oddRowSeats + 2; seat++) {
                    let currentCapitalLetter = String.fromCharCode(sector);
                    let currentSmallLetter = String.fromCharCode(seat);
                    console.log(`${currentCapitalLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            }
        }

        firstSectorRows++;
    }

    console.log(totalSeats);
}

weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);