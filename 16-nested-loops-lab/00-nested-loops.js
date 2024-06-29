function nestedLoops() {

    for(let i = 1; i <= 3;) { // i++; For 3 spins of the outer loop, the inner loop's code is executed 3 times.
        // ^ We run the inner loop once for the value of the outer for 1, once for 2, and once for 3.

        for(let j = 1; j <= 3;) { // j++
            console.log(`i value: ${i}`);
            console.log(`j value: ${j}`);
            j++;
        }

        i++;
    }
}

nestedLoops();