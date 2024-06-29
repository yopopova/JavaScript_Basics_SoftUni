function minNumber(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let min = Number(input[index]); // So it takes the first number from the array and starts comparing against it.
    index++;

    for(let i = 1; i < n; i++) {
        let num = Number(input[index]);
        index++;

        if(min > num) {
            min = num;
        } 
    }

    console.log(min);
}

minNumber(["2", "100", "99"]);