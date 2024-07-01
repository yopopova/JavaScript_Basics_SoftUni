function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let productCounter = 0;
    let totalPrice = 0;

    for(let i = 0; i < input.length - 1; i++) {
        let productName = input[index];
        index++;

        let productPrice = Number(input[index]);
        index++;

        if(productName === "Backpack") {
            productCounter++;

            if(productCounter % 3 === 0) {
                productPrice /= 2;
            } else {
                productPrice = productPrice;
            }

            if(productPrice <= budget) {
                budget -= productPrice;
                totalPrice += productPrice;
            } else {
                let diff = productPrice - budget;
                console.log("You don't have enough money!");
                console.log(`You need ${diff.toFixed(2)} leva!`);
                break;
            }

        } else if(productName === "Shoes") {
            productCounter++;

            if(productCounter % 3 === 0) {
                productPrice /= 2;
            } else {
                productPrice = productPrice;
            }

            if(productPrice <= budget) {
                budget -= productPrice;
                totalPrice += productPrice;
            } else {
                let diff = productPrice - budget;
                console.log("You don't have enough money!");
                console.log(`You need ${diff.toFixed(2)} leva!`);
                break;
            }

        } else if(productName === "Sunglasses") {
            productCounter++;

            if(productCounter % 3 === 0) {
                productPrice /= 2;
            } else {
                productPrice = productPrice;
            }

            if(productPrice <= budget) {
                budget -= productPrice;
                totalPrice += productPrice;
            } else {
                let diff = productPrice - budget;
                console.log("You don't have enough money!");
                console.log(`You need ${diff.toFixed(2)} leva!`);
                break;
            }

        } else if(productName === "Thermal underwear") {
            productCounter++;

            if(productCounter % 3 === 0) {
                productPrice /= 2;
            } else {
                productPrice = productPrice;
            }

            if(productPrice <= budget) {
                budget -= productPrice;
                totalPrice += productPrice;
            } else {
                let diff = productPrice - budget;
                console.log("You don't have enough money!");
                console.log(`You need ${diff.toFixed(2)} leva!`);
                break;
            }

        } else if(productName === "Sunscreen") {
            productCounter++;

            if(productCounter % 3 === 0) {
                productPrice /= 2;
            } else {
                productPrice = productPrice;
            }

            if(productPrice <= budget) {
                budget -= productPrice;
                totalPrice += productPrice;
            } else {
                let diff = productPrice - budget;
                console.log("You don't have enough money!");
                console.log(`You need ${diff.toFixed(2)} leva!`);
                break;
            }

        } else if(productName === "Stop") {
            console.log(`You bought ${productCounter} products for ${totalPrice.toFixed(2)} leva.`);
            break;
        }
    }
}

touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);