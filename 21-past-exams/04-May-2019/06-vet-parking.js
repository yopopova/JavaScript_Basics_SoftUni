function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    
    let totalAmount = 0;

    for(let i = 1; i <= days; i++) {
        let hourFee = 0;
        let dailyFee = 0;

        for(let j = 1; j <= hours; j++) {

            if(i % 2 === 0 && j % 2 !== 0) {
                hourFee = 2.50;
            } else if(i % 2 !== 0 && j % 2 === 0) {
                hourFee = 1.25;
            } else {
                hourFee = 1;
            }

            dailyFee += hourFee;
            totalAmount += hourFee;
        }

        console.log(`Day: ${i} - ${dailyFee.toFixed(2)} leva`);
    }

    console.log(`Total: ${totalAmount.toFixed(2)} leva`);
}

// vetParking(["2", "5"]);
vetParking(["5", "2"]);