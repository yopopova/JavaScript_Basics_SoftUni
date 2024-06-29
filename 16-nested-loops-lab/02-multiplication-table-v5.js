function multiplicationTable() {

    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 10; j++) {

            if(j === 5 || i === 2) {
                continue; // continue will skip all values ​​by 2 (from the outer loop) as well as the lines where it needs to multiply the remaining numbers from the outer loop by 5 (from the inner loop).
            }

            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

multiplicationTable();