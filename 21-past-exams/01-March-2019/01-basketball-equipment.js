function basketballEquipment(input) {
    let yearFee = Number(input[0]);

    let sneakers = yearFee - (yearFee * 0.4);
    let outfit = sneakers - (sneakers * 0.2);
    let ball = outfit / 4;
    let accessories = ball / 5;

    let totalCosts = yearFee + sneakers + outfit + ball + accessories;

    console.log(totalCosts.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);
basketballEquipment(["230"]);