function factorial(input) {
    let n = Number(input[0]);
    let res = 1; // If we start from zero, any number multiplied by zero will always return zero.

    for(let i = 1; i <= n; i++) {
        res = res * i;
    }

    console.log(res);
}

factorial(["4"]);
factorial(["8"]);