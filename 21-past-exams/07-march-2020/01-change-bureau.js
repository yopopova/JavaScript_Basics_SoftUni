function changeBureau(input) {
    let bitcoins = Number(input[0]);
    let yuans = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinAmount = bitcoins * 1168;

    let usd = yuans * 0.15;
    let bgn = usd * 1.76;

    let totalBgnAmount = bitcoinAmount + bgn;
    let euro = totalBgnAmount / 1.95;
    let commissionInPercent = commission / 100;

    let totalEuro = euro - (euro * commissionInPercent);

    console.log(totalEuro.toFixed(2));
}

changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
changeBureau(["7", "50200.12", "3"]);