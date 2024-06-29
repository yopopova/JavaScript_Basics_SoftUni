function numbersEndingIn7() {
    for(let i = 0; i < 1000; i++) {

        if(i % 10 === 7) {
            // ^ Division with a remainder of 10 is used for larger numbers. After === we specify the number with which all numbers in this range should end.
            console.log(i); // Print all numbers that end in 7 to the console.
        }
    }
}

numbersEndingIn7();