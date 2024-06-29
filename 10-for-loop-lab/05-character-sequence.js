function characterSequence(input) {
    let text = input[0];
    let textLength = text.length;
    // ^ It's better to lock the loop length value in a variable. Otherwise, the program will recalculate the length each time.
    // ^ By locking the length in a variable, we simply take its value without recalculating it each time.

    for(let i = 0; i < textLength; i++) { // A way to crawl text. A way to write text vertically.
        console.log(text[i]);
    }
}

characterSequence(["softuni"]);
// characterSequence("hello");