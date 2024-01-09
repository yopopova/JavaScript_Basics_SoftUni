function sumNumbers(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let sum = 0;

    for(let i = 1; i < input.length; i++) {
        let currentNum = Number(input[index]);
        index++;

        sum += currentNum;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);