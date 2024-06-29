function traveling(input) {
    let index = 0;
    let text = input[index]; // The destination.
    index++;

    while (text !== "End") {
        let destination = text;

        let money = Number(input[index]); // The budget.
        index++;

        let budget = money;

        let savedMoney = 0; // Number of money saved.

        while(budget > 0) {
            let currentMoney = Number(input[index]); // The money that comes in when the array is rotated.
            index++

            budget -= currentMoney;
            savedMoney += currentMoney;

           if(budget <= 0) {
               break;
           }
        }

        if(savedMoney >= budget) {
            console.log(`Going to ${destination}!`);
        }

        text = input[index]; // The destination.
        index++;
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
// traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);