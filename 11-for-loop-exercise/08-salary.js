function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++; // We write this line whenever we read something from the input.

    let incomeSalary = Number(input[index]);
    index++;

    let isLostSalary = false; // boolean variable; the so-called boolean flag
    // boolean flags should alternate - false -> true -> false...

    for(let i = 0; i < openTabs; i++) {
        let currentTab = input[index];
        index++;

        if(currentTab === "Facebook") {
            incomeSalary -= 150;
        } else if(currentTab === "Instagram") {
            incomeSalary -= 100;
        } else if(currentTab === "Reddit") {
            incomeSalary -= 50;
        }

        if(incomeSalary <= 0) {
            console.log("You have lost your salary.");
            isLostSalary = true; // This is how we mark that we have lost our salary and tell the program to print only 1 console.log();
            // ^ If this line is not there, the program will also print the bottom console.log(incomeSalary); in the if check.
            break; // To break the loop, stop doing checks when the salary is done.
        }
    }

    if(!isLostSalary) { // Here isLostSalary becomes false because on line 25 it is true.
        console.log(incomeSalary);
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);