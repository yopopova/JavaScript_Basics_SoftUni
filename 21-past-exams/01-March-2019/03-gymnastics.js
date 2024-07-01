function gymnastics(input) {
    let country = input[0];
    let instrument = input[1];

    let difficulty = 0;
    let performance = 0;

    if (country === "Russia") {

        if (instrument === "ribbon") {
            difficulty = 9.100;
            performance = 9.400;
        } else if (instrument === "hoop") {
            difficulty = 9.300;
            performance = 9.800;
        } else if (instrument === "rope") {
            difficulty = 9.600;
            performance = 9.000;
        }

    } else if (country === "Bulgaria") {

        if (instrument === "ribbon") {
            difficulty = 9.600;
            performance = 9.400;
        } else if (instrument === "hoop") {
            difficulty = 9.550;
            performance = 9.750;
        } else if (instrument === "rope") {
            difficulty = 9.500;
            performance = 9.400;
        }

    } else if (country === "Italy") {

        if (instrument === "ribbon") {
            difficulty = 9.200;
            performance = 9.500;
        } else if (instrument === "hoop") {
            difficulty = 9.450;
            performance = 9.350;
        } else if (instrument === "rope") {
            difficulty = 9.700;
            performance = 9.150;
        }

    }

    let totalScore = difficulty + performance; // The final country result.

    let diff = 20 - totalScore; // How much they fall short of for maximum score.

    let diffScorePecent = (diff / 20) * 100; // The difference as a %.

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${instrument}.`);
    console.log(`${diffScorePecent.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);