function currencyConverter(arg1, arg2, arg3) {
    let amount = Number(arg1);
    let inCurrency = String(arg2);
    let outCurrency = String(arg3);

    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;

    let exchange = 0;

    if(inCurrency === "USD") {

        let usdToBgn = amount * usd;

        if(outCurrency === "BGN") {
            exchange = amount * usd;
        } else if(outCurrency === "EUR") {
            // let usdToBgn = amount * usd;
            exchange = usdToBgn / eur;
        } else if(outCurrency === "GBP") {
            exchange = usdToBgn / gbp;
        }

    } else if(inCurrency === "EUR") {

        let eurToBgn = amount * eur;

        if(outCurrency === "BGN") {
            exchange = amount * eur;
        } else if(outCurrency === "USD") {
            exchange = eurToBgn / usd;
        } else if(outCurrency === "GBP") {
            exchange = eurToBgn / gbp;
        }

    } else if(inCurrency === "GBP") {

        let gbpToBgn = amount * gbp;

        if(outCurrency === "BGN") {
            exchange = amount * gbp;
        } else if(outCurrency === "USD") {
            exchange = gbpToBgn / usd;
        } else if(outCurrency === "EUR") {
            exchange = gbpToBgn / eur;
        }

    } else if(inCurrency === "BGN") {

        if(outCurrency === "USD") {
            exchange = amount / usd;
        } else if(outCurrency === "EUR") {
            exchange = amount / eur;
        } else if(outCurrency === "GBP") {
            exchange = amount / gbp;
        }

    }

    console.log(exchange.toFixed(2) + " " + `${outCurrency}`);
}

currencyConverter("20", "USD", "BGN");
currencyConverter("100", "BGN", "EUR");
currencyConverter("12.35", "EUR", "GBP");
currencyConverter("150.35", "USD", "EUR");