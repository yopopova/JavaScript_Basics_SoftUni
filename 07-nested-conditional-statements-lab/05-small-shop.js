function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    if(city === "Sofia") {

        switch(product) {
            case "coffee": console.log(0.50 * quantity); break;
            case "water": console.log(0.80 * quantity); break;
            case "beer": console.log(1.20 * quantity); break;
            case "sweets": console.log(1.45 * quantity); break;
            case "peanuts": console.log(1.60 * quantity); break;
        }

    } else if(city === "Plovdiv") {

        switch(product) {
            case "coffee": console.log(0.40 * quantity); break;
            case "water": console.log(0.70 * quantity); break;
            case "beer": console.log(1.15 * quantity); break;
            case "sweets": console.log(1.30 * quantity); break;
            case "peanuts": console.log(1.50 * quantity); break;
        }

    } else if(city === "Varna") {

        switch(product) {
            case "coffee": console.log(0.45 * quantity); break;
            case "water": console.log(0.70 * quantity); break;
            case "beer": console.log(1.10 * quantity); break;
            case "sweets": console.log(1.35 * quantity); break;
            case "peanuts": console.log(1.55 * quantity); break;
        }
    }
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);