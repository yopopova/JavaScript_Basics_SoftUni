function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for(let symbolA = a1; symbolA <= (a2 - 1); symbolA++) {
        let asciiSymbol = String.fromCharCode(symbolA);
        let symbol1 = asciiSymbol;
        let symbol4 = symbolA;

        for(let symbolB = 1; symbolB <= n - 1; symbolB++) {
            let symbol2 = symbolB;

            for(let symbolC = 1; symbolC <= n / 2 - 1; symbolC++) {
                let symbol3 = symbolC;
                let symbolsAmount = symbol2 + symbol3 + symbol4;

                if(symbolA % 2 !== 0 && symbolsAmount % 2 !== 0) {
                    console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
                }
            }
        }
    }
}

// movieTickets(["86", "88", "4"]);
// movieTickets(["71", "74", "6"]);
movieTickets(["69", "72", "4"]);