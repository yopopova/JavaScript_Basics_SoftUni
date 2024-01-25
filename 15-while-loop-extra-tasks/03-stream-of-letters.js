function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;

    let startSmallLetter = "a".charCodeAt(0);
    let endSmallLetter = "z".charCodeAt(0);

    let startCapitalLetter = "A".charCodeAt(0);
    let endCapitalLetter = "Z".charCodeAt(0);

    let countC = 0;
    let countO = 0;
    let countN = 0;

    let letter = "";
    let word = "";

    while (command !== "End") {
        let symbol = command.charAt(0);
        let numLetter = symbol.charCodeAt(0);

        if (numLetter >= startSmallLetter && numLetter <= endSmallLetter || numLetter >= startCapitalLetter && numLetter <= endCapitalLetter) {

            if (symbol === "c" && countC === 0) {
                countC++;
            } else if (symbol === "o" && countO === 0) {
                countO++;
            } else if (symbol === "n" && countN === 0) {
                countN++;
            } else {
                letter += symbol;
            }

            if (countC + countO + countN === 3) {
                word += letter;
                word += " ";

                letter = "";
                countC = 0;
                countO = 0;
                countN = 0;
            }
        }

        command = input[index];
        index++;
    }

    console.log(word);
}

// streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
// streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);