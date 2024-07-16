function sumTheVowels([word]) {
    let sum = 0;

    // for(let i = 0; i < word.length; i++) {
    //     console.log(word[i]); // This is how we write all the letters vertically, one below the other.
    // }

    for(let i = 0; i < word.length; i++) {
        let currentLetter = word[i];

        if(currentLetter === "a") {
            sum += 1;
        } else if(currentLetter === "e") {
            sum += 2;
        } else if(currentLetter === "i") {
            sum += 3;
        } else if(currentLetter === "o") {
            sum += 4;
        } else if(currentLetter === "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

sumTheVowels(["hello"]);