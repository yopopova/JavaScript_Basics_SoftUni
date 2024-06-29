function charity(input) {
    let days = Number(input[0]);
    let cooks = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakeAmount = cakes * cooks * days * 45;
    let wafflesAmount = waffles * cooks * days * 5.80;
    let pancakesAmount = pancakes * cooks * days * 3.20;

    let result = cakeAmount + wafflesAmount + pancakesAmount;
    result -= 1/8 * result;
    console.log(result);
}

charity(["23", "8", "14", "30", "16"]);
charity(["131", "5", "9", "33", "46"]);