function numFrom0To100WithWords(input) {
    let num = Number(input[0]);

    if (num < 0 || num > 100) {
        console.log("invalid number");
    }

    if (num === 100) {
        console.log("one hundred");
    }

    if (num === 0) {
        console.log("zero");
    } else if (num === 1) {
        console.log("one");
    } else if (num === 2) {
        console.log("two");
    } else if (num === 3) {
        console.log("three");
    } else if (num === 4) {
        console.log("four");
    } else if (num === 5) {
        console.log("five");
    } else if (num === 6) {
        console.log("six");
    } else if (num === 7) {
        console.log("seven");
    } else if (num === 8) {
        console.log("eight");
    } else if (num === 9) {
        console.log("nine");
    } else if (num === 10) {
        console.log("ten");
    } else if (num === 11) {
        console.log("eleven");
    } else if (num === 12) {
        console.log("twelve");
    } else if (num === 13) {
        console.log("thirteen");
    } else if (num === 14) {
        console.log("fourteen");
    } else if (num === 15) {
        console.log("fifteen");
    } else if (num === 16) {
        console.log("sixteen");
    } else if (num === 17) {
        console.log("seventeen");
    } else if (num === 18) {
        console.log("eighteen");
    } else if (num === 19) {
        console.log("nineteen");
    }

    let firstPart = Math.trunc(num / 10); // Get the first digit.
    let secondPart = num % 10; // Get the last digit.

    if (firstPart === 2) {
        firstPart = "twenty";
    } else if (firstPart === 3) {
        firstPart = "thirty";
    } else if (firstPart === 4) {
        firstPart = "forty";
    } else if (firstPart === 5) {
        firstPart = "fifty";
    } else if (firstPart === 6) {
        firstPart = "sixty";
    } else if (firstPart === 7) {
        firstPart = "seventy";
    } else if (firstPart === 8) {
        firstPart = "eighty";
    } else if (firstPart === 9) {
        firstPart = "ninety";
    }

    if (secondPart === 1) {
        secondPart = "one";
    } else if (secondPart === 2) {
        secondPart = "two";
    } else if (secondPart === 3) {
        secondPart = "three";
    } else if (secondPart === 4) {
        secondPart = "four";
    } else if (secondPart === 5) {
        secondPart = "five";
    } else if (secondPart === 6) {
        secondPart = "six";
    } else if (secondPart === 7) {
        secondPart = "seven";
    } else if (secondPart === 8) {
        secondPart = "eight";
    } else if (secondPart === 9) {
        secondPart = "nine";
    }

    if (num > 20 && num < 100 && secondPart !== 0) {
        console.log(`${firstPart} ${secondPart}`);
    }

    if (num !== 100 && firstPart !== 0 && firstPart !== 1 && secondPart === 0) {
        console.log(firstPart);
    }
}

numFrom0To100WithWords(["25"]);
// numFrom0To100WithWords(["42"]);
// numFrom0To100WithWords(["6"]);
// numFrom0To100WithWords(["100"]);
// numFrom0To100WithWords(["-2"]);
// numFrom0To100WithWords(["315"]);
// numFrom0To100WithWords(["0"]); 