function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPaks = Number(input[1]);
    let preparatLiters = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = penPacks * 5.8;
    let markerPrice = markerPaks * 7.2;
    let preparatPrice = preparatLiters * 1.2;

    let suppliesPrice = penPrice + markerPrice + preparatPrice;

    let endAmount = suppliesPrice - (suppliesPrice * discount / 100);

    console.log(endAmount.toFixed(3));
}

suppliesForSchool(["2", "3", "2.5", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);
suppliesForSchool(["7", "8", "0.5", "45"]);