function safePasswordsGenerator(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let maxPassCount = Number(input[2]);

    let symbol1 = 35;
    let symbol2 = 64;

    let passwordsCounter = 0;
    let buffer = "";

    for(let a = 1; a <= num1; a++) {
        for(let b = 1; b <= num2; b++) {
            let characterOne = String.fromCharCode(symbol1); // Here we take the character that corresponds to the corresponding number from the ASCII table.
            let characterTwo = String.fromCharCode(symbol2); // Here we take the character that corresponds to the corresponding number from the ASCII table.

            buffer += "" + characterOne + characterTwo + a + b + characterTwo + characterOne + "|";
            passwordsCounter++;

            if(passwordsCounter >= maxPassCount) {
                console.log(buffer);
                return;
            }

            symbol1++;

            if(symbol1 > 55) {
                symbol1 = 35;
            }

            symbol2++;

            if(symbol2 > 96) {
                symbol2 = 64;
            }
        }
    }

    console.log(buffer);
}

safePasswordsGenerator(["2", "3", "10"]);
safePasswordsGenerator(["20", "50", "10"]);