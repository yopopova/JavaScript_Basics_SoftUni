function theMostPowerfulWord(input) {
    let index = 0;
    let word = input[index];
    index++;

    let sum = 0;
    let maxSum = 0;
    let powerWord = "";

    while (word !== "End of words") {
        let wordL = word.length;
        let firstLetter = word[0]; // We take the first letter of each word to see if it is not one of the specified.

        for (let i = 0; i < wordL; i++) {
            let letter = word[i]; // We take each letter separately.
            let symbol = letter.charCodeAt(0); // Get the ASCII value (number) of each letter.

            sum += symbol; // Add the sum of the letter values.
        }

        switch (firstLetter) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "Y": sum *= wordL; break;
            default: sum /= wordL; break;
        }

        sum = Math.floor(sum);

        if (sum > maxSum) {
            maxSum = sum;
            powerWord = word;
        }

        word = input[index];
        index++;
        sum = 0;
    }

    console.log(`The most powerful word is ${powerWord} - ${maxSum}`);
}

theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);