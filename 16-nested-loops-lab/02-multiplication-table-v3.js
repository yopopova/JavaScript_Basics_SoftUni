function multiplicationTable() {

    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 10; j++) {

            if(j === 5) {
                continue; // continue will output all values, skipping those multiplied by 5.
            }

            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

multiplicationTable();