function numberPyramid(input) {
    let n = Number(input[0]);

    let printNumber = 1;
    let isFinish = false; // Have we reached the number n? No, that's why it's false.
    // ^ printNumber has the number become n? No, that's why it's false.

    let rows = 0;

    while(!isFinish) {
        let buffer = " "; // So we can print multiple values ​​on one line.

        for(let columns = 0; columns <= rows; columns++) {
            buffer += printNumber + " ";

            if(printNumber === n) {
                isFinish = true;
                break;
            }

            printNumber++;
        }

        rows++;
        console.log(buffer);
    }
}

// numberPyramid(["7"]);
// numberPyramid(["12"]);
numberPyramid(["15"]);