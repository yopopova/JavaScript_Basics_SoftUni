function sumNumbers(input) {
    let target = Number(input[0]);

    let inputL = input.length;

    let sum = 0;
    let index = 1;

    while (index < inputL) {
        sum += Number(input[index]);

        // if(sum >= target) {
        //     break;
        // }

        // ^ In this task, it is not mandatory, but in principle it is good to have the if check with break.

        index++;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);