function secretDoorsLock(input) {
    let hundreds = Number(input[0]);
    let dozens = Number(input[1]);
    let units = Number(input[2]);

    for(let a = 1; a <= hundreds; a++) {
        if(a % 2 === 0) {
            for(let b = 1; b <= dozens; b++) {
                if(b === 2 || b === 3 || b === 5 || b === 7) {
                    for(let c = 1; c <= units; c++) {
                        if(c % 2 === 0) {
                            console.log(`${a} ${b} ${c}`);
                        }
                    }
                }
            }
        }
    }
}

// secretDoorsLock(["3", "5", "5"]);
secretDoorsLock(["8", "2", "8"]);