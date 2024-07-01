function tennisEquipment(input) {
    let pricePerRacket = Number(input[0]);
    let racketsCount = Number(input[1]);
    let sneakersCount = Number(input[2]);

    let pricePerSneakers = pricePerRacket / 6;

    let totalRacketsPrice = pricePerRacket * racketsCount;
    let totalSneakersPrice = pricePerSneakers * sneakersCount;

    let otherEquipment = (totalRacketsPrice + totalSneakersPrice) * 0.2;

    let totalAmount = totalRacketsPrice + totalSneakersPrice + otherEquipment;

    let djokovicPart = totalAmount / 8;
    let sponsorsPart = totalAmount - djokovicPart;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPart)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPart)}`);
}

tennisEquipment(["850", "4", "2"]);
// tennisEquipment(["1000", "3", "1"]);
// tennisEquipment(["386", "7", "4"]);
