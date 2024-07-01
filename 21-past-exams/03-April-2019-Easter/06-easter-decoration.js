function easterDecoration(input) {
    let index = 0;
    let clientsNum = Number(input[index]);
    index++;

    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocoBunnyPrice = 7;

    let productCounter = 0;
    let allPrice = 0;
    let totalAmount = 0;

    for (let i = 0; i < clientsNum; i++) {
        let command = input[index];
        index++;

        while (command !== "Finish") {

            if (command === "basket") {
                allPrice += basketPrice;
                productCounter++;
            } else if (command === "wreath") {
                allPrice += wreathPrice;
                productCounter++;
            } else if (command === "chocolate bunny") {
                allPrice += chocoBunnyPrice;
                productCounter++;
            }

            command = input[index];
            index++;
        }

        if (productCounter % 2 === 0) {
            allPrice = allPrice * 0.8;
        }

        totalAmount += allPrice;
        console.log(`You purchased ${productCounter} items for ${allPrice.toFixed(2)} leva.`);

        allPrice = 0;
        productCounter = 0;
    }

    if (clientsNum > 1) {
        totalAmount = totalAmount / clientsNum;
    }

    console.log(`Average bill per client is: ${totalAmount.toFixed(2)} leva.`);
}

// easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);