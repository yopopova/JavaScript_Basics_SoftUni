function forLoopDemoTwo() {
    for(let i = 1; i <= 10; i++) {
        if(i === 5) {
            continue;
        } else {
            console.log(i);
        }
    }

    console.log("After the loop!");
}

forLoopDemoTwo();