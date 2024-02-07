function challengeTheWedding(input) {
    let womenCount = Number(input[0]);
    let menCount = Number(input[1]);
    let tables = Number(input[2]);

    let tablesCounter = 0;
    let buffer = "";

    for (let m = 1; m <= womenCount; m++) {
        for (let w = 1; w <= menCount; w++) {
            
            if (tablesCounter === tables) {
                break;
            } else {
                buffer += "" + "(" + m + " " + "<" + "-" + ">" + " " + w + ")" + " ";
                tablesCounter++;
            }
        }
    }

    console.log(buffer);
}

// challengeTheWedding(["2", "2", "6"]);
challengeTheWedding(["2", "2", "3"]);
// challengeTheWedding(["5", "8", "40"]);