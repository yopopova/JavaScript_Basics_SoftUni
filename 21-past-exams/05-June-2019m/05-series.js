function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let seriesCount = Number(input[index]);
    index++;

    let finalPrice = 0;
    let totalPrice = 0;

    for(let i = 0; i < seriesCount; i++) {
        let movie = input[index];
        index++;

        let price = Number(input[index]);
        index++;

        if(movie === "Thrones") {
            finalPrice = price / 2;
        } else if(movie === "Lucifer") {
            finalPrice = price * 0.6;
        } else if(movie === "Protector") {
            finalPrice = price * 0.7;
        } else if(movie === "TotalDrama") {
            finalPrice = price * 0.8;
        } else if(movie === "Area") {
            finalPrice = price * 0.9;
        } else {
            finalPrice = price;
        }

        totalPrice += finalPrice;
    }

    let diff = Math.abs(budget - totalPrice);

    if(budget >= totalPrice) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);