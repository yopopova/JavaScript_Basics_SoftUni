function clock() {

    for (let hours = 0; hours <= 23; hours++) {
        for (let mins = 0; mins <= 59; mins++) {
            if (mins < 10) {
                console.log(`${hours}:0${mins}`);
            } else {
                console.log(`${hours}:${mins}`);
            }
        }
    }
}

clock();