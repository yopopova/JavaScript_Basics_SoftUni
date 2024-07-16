function triangleOfDollars(input) {
    let num = Number(input[0]);

    for (let i = 1; i <= num; i++) {
        let dollars = "$";

        for (let j = 1; j < i; j++) { // The number of $ depends on the row we're on, so it's from i, not from num.
            dollars += " $";
        }

        console.log(dollars);
    }
}

// triangleOfDollars(["3"]);
triangleOfDollars(["4"]);