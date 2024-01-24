function reportSystem(input) {
    let index = 0;
    let goalMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let moneyCounter = 0;
    let paymentsCount = 0;

    let payCashCount = 0;
    let payCardCount = 0;

    let cashPayments = 0;
    let cardPayments = 0;

    while (command !== "End") {
        let money = Number(command);

        paymentsCount++;

        if (paymentsCount % 2 !== 0) {

            if (money > 100) {
                console.log("Error in transaction!");
            } else {
                payCashCount++;
                cashPayments += money;
                moneyCounter += money;
                goalMoney -= money;
                console.log("Product sold!");
            }

        } else {

            if (money < 10) {
                console.log("Error in transaction!");
            } else {
                payCardCount++;
                cardPayments += money;
                moneyCounter += money;
                goalMoney -= money;
                console.log("Product sold!");
            }
        }

        if (goalMoney <= 0) {
            cashPayments /= payCashCount;
            cardPayments /= payCardCount;
            console.log(`Average CS: ${cashPayments.toFixed(2)}`);
            console.log(`Average CC: ${cardPayments.toFixed(2)}`);
            break;
        }

        command = input[index];
        index++;
    }

    if(command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}

// reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);