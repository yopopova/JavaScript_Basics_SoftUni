function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxGoals = 0;
    let name = " ";

    while(command !== "END") {
        let player = command;

        let goals = Number(input[index]);
        index++;

        if(goals > maxGoals) {
            maxGoals = goals;
            name = player;
        }

        if(maxGoals >= 10) {
            break;
        }

        command = input[index];
        // index++; We don't raise because we raised above if we write it and here we raise 2 times and the code is wrong.

        goals = Number(input[index]);
        index++;
    }
    
    console.log(`${name} is the best player!`);

    if(maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

// bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
// bestPlayer(["Silva", "5", "Harry Kane", "10"]);
// bestPlayer(["Petrov", "2", "Drogba", "11"]);
// bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);