function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if(projection == "Premiere") {
        income = rows * columns * 12.00;

    } else if(projection == "Normal") {
        income = rows * columns * 7.50;

    } else if(projection == "Discount") {
        income = rows * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);