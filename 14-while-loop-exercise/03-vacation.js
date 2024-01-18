function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCounter = 0;

    while(money < neededMoney) {
        dayCounter++;

        let action = input[index];
        index++;

        let currentMoney = Number(input[index]);
        index++;

        if(action === "spend") {
            money -= currentMoney;

            if(money < 0) {
                money = 0;
            }

            counter++;
        } else {
            money += currentMoney;
            counter = 0;
        }

        if(counter === 5) {
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            break;
        }
    }

    if(money >= neededMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);