function evenPowersOfTwo(input) {
    let n = Number(input[0]);

    for(let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2,i)); // To get the given power of a number. First we write the degree, then the number.
    }
}

evenPowersOfTwo("3");
evenPowersOfTwo("7");
evenPowersOfTwo(["10"]);