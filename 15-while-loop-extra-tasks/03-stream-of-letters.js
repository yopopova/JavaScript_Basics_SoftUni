function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;

    let startSmallLetter = "a".charCodeAt(0); // We get the beginning of the lowercase letters.
    let endSmallLetter = "z".charCodeAt(0); // We take the end of the lowercase letters.

    let startCapitalLetter = "A".charCodeAt(0); // We take the beginning of uppercase letters.
    let endCapitalLetter = "Z".charCodeAt(0); // We take the end of the uppercase letters.

    let countC = 0; // Count how many times we have encountered a Latin letter "c".
    let countO = 0; // Count how many times we have encountered a Latin letter "o".
    let countN = 0; // Count how many times we have encountered a Latin letter "n".

    let letter = ""; // We take each letter.
    let word = ""; // Get the individual words.

    while (command !== "End") {
        let symbol = command.charAt(0); // We take each letter as a character.
        let numLetter = symbol.charCodeAt(0); // Convert each character to its number from the ASCII table.

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

            if (countC + countO + countN === 3) { // Check if we've already encountered all three letters.
                word += letter;
                word += " "; // Add a space after the word.

                letter = ""; // Reset all counters.
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