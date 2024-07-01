function cinemaVoucher(input) {
    let index = 0;
    let voucher = Number(input[index]);
    index++;

    let price = 0;

    let ticketsCount = 0;
    let productsCount = 0;

    for (let i = 0; i < input.length - 1; i++) { // So we take all the purchases until the end of the input, because we don't have another variable.
        // ^ If i < input.length we write without - 1, at the end we will get another line that will say undefined.

        let purchase = input[index];
        index++;

        if (purchase !== "End") {

            if (purchase.length > 8) {
                price = purchase.charCodeAt(0) + purchase.charCodeAt(1);

                if (voucher >= price) {
                    voucher -= price;
                } else {
                    break;
                }

                ticketsCount++;

            } else {
                price = purchase.charCodeAt(0); // Get the number/value of the character.

                if (voucher >= price) {
                    voucher -= price;
                } else {
                    break;
                }

                productsCount++;
            }

            purchase++;

        } else {
            console.log(`${ticketsCount}`);
            console.log(`${productsCount}`);
            return;
        }
    }

    console.log(`${ticketsCount}`);
    console.log(`${productsCount}`);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);