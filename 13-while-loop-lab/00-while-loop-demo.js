function whileLoopDemo() {
    let i = 1;

    while(i <= 10) { // We can also write true in the brackets and the program will produce the same result.
        if(i === 5) {
            break;
        } else {
            console.log(i);
            i++;
        }
    }

    console.log("After the loop!");
}

whileLoopDemo();