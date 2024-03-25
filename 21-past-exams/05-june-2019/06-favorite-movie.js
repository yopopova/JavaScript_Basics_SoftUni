function favoriteMovie(input) {
    let index = 0;
    let command = input[index];
    index++;

    let movieCounter = 0;
    let maxPoints = 0;
    let favMovie = "";

    while(command !== "STOP") {
        let movieName = command;
        movieCounter++;

        let points = 0;

        let movieNameL = movieName.length;

        for(let i = 0; i < movieNameL; i++) {
            let letter = movieName[i];
            let symbol = letter.charCodeAt(0);
            points += symbol;

            if(letter === " ") {
                points -= 0;
            } else if(letter === letter.toLowerCase()) {
                points -= movieNameL * 2;
            } else if(letter === letter.toUpperCase()) {
                points -= movieNameL;
            }
        }

        if(points > maxPoints) {
            maxPoints = points;
            favMovie = movieName;
        }

        if(movieCounter === 7) {
            console.log("The limit is reached.");
            console.log(`The best movie for you is ${favMovie} with ${maxPoints} ASCII sum.`);
            break;
        }

        command = input[index];
        index++;
    }

    if(command === "STOP") {
        console.log(`The best movie for you is ${favMovie} with ${maxPoints} ASCII sum.`);
    }
}

// favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
// favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);
favoriteMovie(["The maze", "School story 2", "Shrek 2", "Ice age", "STOP"]);