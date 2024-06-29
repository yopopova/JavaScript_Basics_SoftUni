function greaterNumber(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    if(firstNum > secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);