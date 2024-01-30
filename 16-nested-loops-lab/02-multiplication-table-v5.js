function multiplicationTable() {

    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 10; j++) {

            if(j === 5 || i === 2) {
                continue;
            }

            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

multiplicationTable();