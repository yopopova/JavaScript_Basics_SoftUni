function easterShop(input) {
    let index = 0;
    let leftEggs = Number(input[index]);
    index++;

    let soldEggs = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let command = input[index];
        index++;

        let eggs = Number(input[index]);
        index++;

        if (command === "Buy") {

            if(eggs <= leftEggs) {
                leftEggs -= eggs;
                soldEggs += eggs;
            } else {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${leftEggs}.`);
                break;
            }

        } else if (command === "Fill") {
            leftEggs += eggs;

        } else if (command === "Close") {
            console.log("Store is closed!");
            console.log(`${soldEggs} eggs sold.`);
        }
    }
}

easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);