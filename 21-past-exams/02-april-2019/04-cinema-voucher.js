function cinemaVoucher(input) {
    let index = 0;
    let voucher = Number(input[index]);
    index++;

    let price = 0;

    let ticketsCount = 0;
    let productsCount = 0;

    for (let i = 0; i < input.length - 1; i++) {
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
                price = purchase.charCodeAt(0);

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