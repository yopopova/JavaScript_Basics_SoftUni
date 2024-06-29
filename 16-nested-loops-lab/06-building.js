function building(input) {
    let index = 0;
    let floors = Number(input[index]);
    index++;

    let rooms = Number(input[index]);
    index++;

    for (let i = floors; i >= 1; i--) { // Floors.
        let apartmentNum = " ";

        for (let j = 0; j < rooms; j++) { // Rooms per floor.
            if (i === floors) {
                apartmentNum += `L${i}${j} `;
            } else {
                if (i % 2 !== 0) { // Odd floors.
                    apartmentNum += `A${i}${j} `;
                } else { // Even floors.
                    apartmentNum += `O${i}${j} `;
                }
            }
        }

        console.log(apartmentNum);
    }
}

building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);