function vowelsSum(input) {
    let word = input[0];
    let wordLength = word.length;

    let sum = 0;

    for(let i = 0; i < wordLength; i++) {
        // console.log(word.charAt(i)); Returns each character individually.
        
        let ch = word.charAt(i); // == let ch = word[i];

        switch(ch) {
            case "a" : sum += 1; break;
            case "e" : sum += 2; break;
            case "i" : sum += 3; break;
            case "o" : sum += 4; break;
            case "u" : sum += 5; break;
        }
    }

    console.log(sum);
}

vowelsSum(["hello"]);