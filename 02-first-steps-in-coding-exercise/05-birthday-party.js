function birthdayParty(input) {
    let hallRent = Number(input[0]);

    let cakePrice = hallRent * 0.20;
    let drinks = cakePrice * 0.55;
    let animator = hallRent / 3;

    let budget = hallRent + cakePrice + drinks + animator;

    console.log(budget);
}