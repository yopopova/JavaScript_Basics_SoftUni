function numberPyramid(input) {
    let n = Number(input[0]);

    let printNumber = 1;
    let isFinish = false;

    for(let rows = 0; rows < n; rows++) {
        let buffer = " ";

        for(let columns = 0; columns <= rows; columns++) {
            buffer += printNumber + " ";

            if(printNumber === n) {
                isFinish = true;
                break;
            }

            printNumber++;
        }

        console.log(buffer);

        if(isFinish) {
            break;
        }
    }
}

// numberPyramid(["7"]);
// numberPyramid(["12"]);
numberPyramid(["15"]);