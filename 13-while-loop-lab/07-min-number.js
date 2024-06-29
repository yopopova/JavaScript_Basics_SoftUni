function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER; // We guarantee that this is the biggest number we can get.

    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Stop") {
        let num = Number(command);

        if(num < minNum) {
            minNum = num;
        }

        command = input[index];
        index++;
    }

    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);