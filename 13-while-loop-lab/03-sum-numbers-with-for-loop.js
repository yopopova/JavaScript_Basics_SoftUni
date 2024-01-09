function sumNumbers(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let sum = 0;
    let inputL = input.length;

    for(let i = 1; i < inputL; i++) {
        sum += Number(input[i]);
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);