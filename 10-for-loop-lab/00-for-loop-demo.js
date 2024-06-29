function forLoopDemo() {
    for(let i = 1; i <= 10; i++) {
        if(i === 5) {
            break;
        } else {
            console.log(i);
        }
    }

    console.log("After the loop!");
}

forLoopDemo();