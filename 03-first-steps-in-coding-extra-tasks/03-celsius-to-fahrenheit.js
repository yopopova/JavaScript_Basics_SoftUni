function celsiusToFahrenheit(input) {
    let c = Number(input[0]);

    let f = c * 1.8 + 32;

    console.log(f.toFixed(2));
}

celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);