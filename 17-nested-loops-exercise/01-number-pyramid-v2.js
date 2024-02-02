function numberPyramid(input) {
    let n = Number(input[0]);

    let printNumber = 1;
    let isFinish = false;

    let rows = 0;

    while(!isFinish) {
        let buffer = " ";

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