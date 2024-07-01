function easterBake(input) {
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;

    let sugarCount = 0;
    let farinaCount = 0;

    let maxSugar = 0;
    let maxFarina = 0;

    for(let i = 0; i < easterBreadCount; i++) {
        let sugar = Number(input[index]);
        index++;

        let farina = Number(input[index]);
        index++;
        
        sugarCount += sugar;
        farinaCount += farina;

        if(sugar > maxSugar) {
            maxSugar = sugar;
        }

        if(farina > maxFarina) {
            maxFarina = farina;
        }
    }

    let packsSugar = sugarCount / 950;
    let packsFarina = farinaCount / 750;

    console.log(`Sugar: ${Math.ceil(packsSugar)}`);
    console.log(`Flour: ${Math.ceil(packsFarina)}`);
    console.log(`Max used flour is ${maxFarina} grams, max used sugar is ${maxSugar} grams.`);
}

// easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);