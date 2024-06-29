function sumOfNumbers(input) {
    let textNumber = input[0];
    let textLength = textNumber.length;

    let sum = 0;

    for(let i = 0; i < textLength; i++) {
        let currentNumber = Number(textNumber[i]);
        sum += currentNumber; // sum = sum + currentNumber
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);