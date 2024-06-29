function multiplicationTable() {

    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 10; j++) {

            if(j === 5 && i === 2) {
                continue; // continue will skip the line where 2 (from the outer loop) needs to be multiplied by 5 (from the inner loop).
            }

            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

multiplicationTable();