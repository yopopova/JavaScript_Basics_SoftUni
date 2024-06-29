function sumNumbers(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let sum = 0;
    let inputL = input.length;

    for(let i = 1; i < inputL; i++) {
        sum += Number(input[i]);

        // if(sum >= target) {
        //     break;
        // }

        // ^ In this task, it is not mandatory, but in principle it is good to have the if check with break.
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);