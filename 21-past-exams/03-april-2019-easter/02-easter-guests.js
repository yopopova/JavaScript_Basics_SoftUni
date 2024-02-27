function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let sweetBreadCount = Math.ceil(guests / 3);
    let eggsCount = guests * 2;

    let sweetBreadPrice = sweetBreadCount * 4;
    let eggsPrice = eggsCount * 0.45;

    let totalPrice = sweetBreadPrice + eggsPrice;

    let diff = Math.abs(budget - totalPrice);

    if(budget < totalPrice) {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    } else {
        console.log(`Lyubo bought ${sweetBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    }
}

easterGuests(["10", "35"]);
easterGuests(["9", "12"]);