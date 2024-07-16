function sumLeftAndRight(input) {
    let leftSum = 0;
    let rightSum = 0;

    let leftEndIndex = (input.length - 1) / 2; // We write -1 to remove the first number from the array because we don't need it in the calculations.
    // ^ Divide by 2 to split the array in half.

    for (let i = 1; i <= leftEndIndex; i++) {
        let currentNum = Number(input[i]);

        leftSum += currentNum;
    }

    for (let j = leftEndIndex + 1; j < input.length; j++) {
        let currentNum = Number(input[j]);

        rightSum += currentNum;
    }

    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}

sumLeftAndRight([2, 10, 90, 60, 40]);
sumLeftAndRight([3, 90, 9, 50, 50]);