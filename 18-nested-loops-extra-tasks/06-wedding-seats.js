function weddingSeats(input) {
    let lastSector = input[0]; // The last sector that will be in the hall.
    let firstSectorRows = Number(input[1]); // The number of rows in the first sector (A).
    let oddRowSeats = Number(input[2]); // Number of places in the odd rows.

    let startSector = "A"; // Numbering of sectors - start with capital Latin A.
    let startSeat = "a".charCodeAt(0); // Numbering the number of places.

    let totalSeats = 0; // The total number of seats.

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
                    // ^ Here we add 2, because the places of the even rows are 2 more by condition.
                    let currentCapitalLetter = String.fromCharCode(sector);
                    let currentSmallLetter = String.fromCharCode(seat);
                    console.log(`${currentCapitalLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            }
        }

        firstSectorRows++; // We increase the number of rows, because in each subsequent sector they increase by 1 by condition.
    }

    console.log(totalSeats);
}

weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);