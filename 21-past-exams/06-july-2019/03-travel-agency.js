function travelAgency(input) {
    let town = input[0];
    let pack = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);

    let price = 0;
    let totalAmount = 0;

    if(days > 7) {
        days = days - 1;
    }

    if(town === "Bansko" || town === "Borovets") {
        if (pack === "withEquipment") {
            price = 100;

            if (vipDiscount === "yes") {
                price = price * 0.90;
            }
        } else if (pack === "noEquipment") {
            price = 80;

            if (vipDiscount === "yes") {
                price = price * 0.95;
            }
        } else {
            console.log("Invalid input!");
            return;
        }

    } else if(town === "Varna" || town === "Burgas") {
        if (pack === "withBreakfast") {
            price = 130;

            if (vipDiscount === "yes") {
                price = price * 0.88;
            }
        } else if (pack === "noBreakfast") {
            price = 100;

            if (vipDiscount === "yes") {
                price = price * 0.93;
            }
        } else {
            console.log("Invalid input!");
            return;
        }

    } else {
        console.log("Invalid input!");
        return;
    }

    if(days <= 0) {
        console.log("Days must be positive number!");
    } else {
        totalAmount = price * days;
        console.log(`The price is ${totalAmount.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);