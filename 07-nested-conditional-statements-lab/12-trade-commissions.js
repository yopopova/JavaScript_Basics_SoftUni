function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    
    let commission = 0;

    if(town == "Sofia") {
        if(sales >= 0 && sales <= 500) {
            commission = sales * 0.05;
        } else if(sales > 500 && sales <= 1000) {
            commission = sales * 0.07;
        } else if(sales > 1000 && sales <= 10000) {
            commission = sales * 0.08;
        } else if(sales > 10000) {
            commission = sales * 0.12;
        }


    } else if(town == "Varna") {
        if(sales >= 0 && sales <= 500) {
            commission = sales * 0.045;
        } else if(sales > 500 && sales <= 1000) {
            commission = sales * 0.075;
        } else if(sales > 1000 && sales <= 10000) {
            commission = sales * 0.1;
        } else if(sales > 10000) {
            commission = sales * 0.13;
        }


    } else if(town == "Plovdiv") {
        if(sales >= 0 && sales <= 500) {
            commission = sales * 0.055;
        } else if(sales > 500 && sales <= 1000) {
            commission = sales * 0.08;
        } else if(sales > 1000 && sales <= 10000) {
            commission = sales * 0.12;
        } else if(sales > 10000) {
            commission = sales * 0.145;
        }

    }

    if(commission != 0) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);