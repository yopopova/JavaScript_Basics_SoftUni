function clockPartTwo() {

    for(let hours = 0; hours <= 23; hours++) {
        for(let mins = 0; mins <= 59; mins++) {
            for(let secs = 0; secs <= 59; secs++) {
                console.log(`${hours} : ${mins} : ${secs}`);
            }
        }
    }
}

clockPartTwo();