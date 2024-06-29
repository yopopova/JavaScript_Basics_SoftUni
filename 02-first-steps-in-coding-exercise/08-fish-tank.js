function fishTank(input) {
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = lengthCm * widthCm * heightCm;
    let tankLiters = tankVolume * 0.001;
    let sandPercent = percent * 0.01;

    neededLiters = tankLiters * (1 - sandPercent);
    console.log(neededLiters);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);