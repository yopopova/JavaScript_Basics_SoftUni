function factorial(input) {
    let n = Number(input[0]);
    let res = 1;

    for(let i = 1; i <= n; i++) {
        res = res * i;
    }

    console.log(res);
}

factorial(["4"]);
factorial(["8"]);