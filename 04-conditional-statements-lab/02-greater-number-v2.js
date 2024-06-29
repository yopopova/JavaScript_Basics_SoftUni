function greaterNumber(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    console.log(Math.max(firstNum, secondNum)); // This replaces the if-else construct from the 1st variant of the task.
    // ^ This is how we call the largest number available. By the same logic, we use Math.min() to find the smallest number.
    // ^ The parentheses after Math.max() may not have variable names, but numbers.
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);