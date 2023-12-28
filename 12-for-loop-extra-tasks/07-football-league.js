function footballLeague(input) {
    let index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;

    let allFans = Number(input[index]);
    index++;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for(let i = 0; i < allFans; i++) {
        let sector = input[index];
        index++;

        if(sector === "A") {
            sectorA++;
        } else if(sector === "B") {
            sectorB++;
        } else if(sector === "V") {
            sectorV++;
        } else if(sector === "G") {
            sectorG++;
        }
    }

    let fansSectorA = (sectorA / allFans) * 100;
    let fansSectorB = (sectorB / allFans) * 100;
    let fansSectorV = (sectorV / allFans) * 100;
    let fansSectorG = (sectorG / allFans) * 100;
    let fansPercentage = (allFans / stadiumCapacity) * 100;

    console.log(`${fansSectorA.toFixed(2)}%`);
    console.log(`${fansSectorB.toFixed(2)}%`);
    console.log(`${fansSectorV.toFixed(2)}%`);
    console.log(`${fansSectorG.toFixed(2)}%`);
    console.log(`${fansPercentage.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
// footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
// footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);