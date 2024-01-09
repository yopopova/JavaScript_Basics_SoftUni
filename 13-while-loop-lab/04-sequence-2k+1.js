function sequence(input) {
    let n = Number(input[0]);
    let num = 1;

    while(num <= n) {
        console.log(num);
        num = (num * 2) + 1;
    }
}

sequence(["3"]);
sequence(["8"]);
sequence(["17"]);
sequence(["31"]);