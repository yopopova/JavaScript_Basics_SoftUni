function multiplyByTwo(input) {
    let index = 0;

    let num = input[index];
    index++;

    while (true) {

        if (num < 0) {
            console.log("Negative number!");
            break;
        } else {
            let currentNum = num * 2;
            console.log(`Result: ${currentNum.toFixed(2)}`);
        }

        num = input[index];
        index++;
    }
}

multiplyByTwo(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyByTwo(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyByTwo(["-23"]);