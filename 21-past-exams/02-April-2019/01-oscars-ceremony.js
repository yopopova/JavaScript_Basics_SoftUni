function oscarsCeremony(input) {
    let hallPrice = Number(input[0]);

    let statuette = hallPrice - (hallPrice * 0.3);
    let catering = statuette - (statuette * 0.15);
    let soundSystem = catering / 2;

    let totalAmount = hallPrice + statuette + catering + soundSystem;

    console.log(totalAmount.toFixed(2));
}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);