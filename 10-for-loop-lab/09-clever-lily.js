function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let income = 0;

    for (let currentBDay = 1; currentBDay <= age; currentBDay++) {
        // ^ Loop up to and including the last birthday to catch all birthdays.

        if (currentBDay % 2 !== 0) {
            toysCounter++;
        } else {
            stolenMoney++;
            savedMoney += 10;
            income += savedMoney;
        }
    }

    let moneyFromToys = toysCounter * toyPrice;
    let finalIncome = (income + moneyFromToys) - stolenMoney;

    let diff = Math.abs(washingMachinePrice - finalIncome);
    
    if(finalIncome >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"]);