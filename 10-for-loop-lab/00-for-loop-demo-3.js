function forLoopDemoThree() {
    for(let i = 1; i <= 10; i++) {
        if(i === 10) {
            continue;
        } else {
            console.log(i);
        }
    }

    console.log("After the loop!");
}

forLoopDemoThree();