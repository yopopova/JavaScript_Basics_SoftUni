function sumNumbers(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let sum = 0;

    while(sum < target) {
        sum += Number(input[index]);
        index++;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);