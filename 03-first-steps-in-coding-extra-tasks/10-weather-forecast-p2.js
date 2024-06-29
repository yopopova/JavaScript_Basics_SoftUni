function weatherForecastP2(input) {
    let degrees = Number(input[0]);

    if((degrees >= 26.00) && (degrees <= 35.00)) {
        console.log("Hot");
    } else if((degrees >= 20.1) && (degrees <= 25.9)) {
        console.log("Warm");
    } else if((degrees >= 15.00) && (degrees <= 20.00)) {
        console.log("Mild");
    } else if((degrees >= 12.00) && (degrees <= 14.9)) {
        console.log("Cool");
    } else if((degrees >= 5.00) && (degrees <= 11.9)) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weatherForecastP2(["16.5"]);
weatherForecastP2(["8"]);
weatherForecastP2(["22.4"]);
weatherForecastP2(["26"]);
weatherForecastP2(["0"]);