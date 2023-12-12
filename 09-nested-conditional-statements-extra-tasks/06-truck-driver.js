function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);

    let salary = 0;

    if(kmMonth <= 5000) {

        if((season === "Spring") || (season === "Autumn")) {
            salary = (kmMonth * 0.75) * 4;
        } else if(season === "Summer") {
            salary = (kmMonth * 0.90) * 4;
        } else if(season === "Winter") {
            salary = (kmMonth * 1.05) * 4;
        }

    } else if((kmMonth > 5000) && (kmMonth <= 10000)) {

        if((season === "Spring") || (season === "Autumn")) {
            salary = (kmMonth * 0.95) * 4;
        } else if(season === "Summer") {
            salary = (kmMonth * 1.10) * 4;
        } else if(season === "Winter") {
            salary = (kmMonth * 1.25) * 4;
        }        

    } else if((kmMonth > 10000) && (kmMonth <= 20000)) {
        salary = (kmMonth * 1.45) * 4;
    }

    let taxes = salary * 0.10;
    let finalSalary = salary - taxes;

    console.log(finalSalary.toFixed(2));
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);