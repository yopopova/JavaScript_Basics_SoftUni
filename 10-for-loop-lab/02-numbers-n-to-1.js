function numsToOne(input) {
    let n = Number(input[0]);

    for(let i = n; i >= 1; i--) {
        console.log(i);
    }

    // The program checks for the condition "i >= 1" and if true, goes to the console to print it.
    // Then it goes back to "i--" to print the next one, and so on until i equals 1.
    // When i becomes 0, the condition in the parentheses becomes false. When the for loop becomes false, it ends its execution.
}

numsToOne(["5"]);