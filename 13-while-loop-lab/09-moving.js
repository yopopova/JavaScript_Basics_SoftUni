function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let volume = w * l * h;

    let index = 3;
    let sum = 0; // Holds the cubic meters we rotate in the loop. In it we collect them and print their final value.
    let command = input[index]; // The variable holds the numbers we will rotate in the array.
    // With a while loop, the variable whose value we will rotate in the loop is declared before the loop itself, otherwise there is no way to get the condition in the while.

    while(command !== "Done") {
        sum += Number(input[index]);
        index++;

        if(sum > volume) { // We write this check inside the loop, otherwise it won't print anything to the console.
            break;
        }

        command = input[index]; // We update the value of the command so that on the next rotation, it will be the new value.
        // If we don't read it again, the value of the variable will stay the same and nothing will be printed to the console.
    }

    if(sum > volume) {
        console.log(`No more free space! You need ${sum - volume} Cubic meters more.`);
    } else {
        console.log(`${volume - sum} Cubic meters left.`);
    }

}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);