function guessThePass(input) {
    let pass = input[0];

    if(pass === "s3cr3t!P@ssw0rd") {
        console.log(`Welcome`);
    } else {
        console.log(`Wrong password!`);
    }
}

guessThePass(["qwerty"]);
guessThePass(["s3cr3t!P@ssw0rd"]);
guessThePass(["s3cr3t!p@ss"]);