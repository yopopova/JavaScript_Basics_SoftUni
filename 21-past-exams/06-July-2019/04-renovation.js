function renovation(input) {
    let index = 0;
    let h = Number(input[index]);
    index++;

    let w = Number(input[index]);
    index++;

    let quota = Number(input[index]);
    index++;

    let percentages = quota / 100; // The percentages of the room that will not be painted.
    let totalArea = 0;
    let areaForPainting = 0;
    let litersCount = 0;

    for(let i = 0; i < input.length - 1; i++) {
        let paintLiters = input[index];
        index++;

        if(paintLiters !== "Tired!") {
            paintLiters = Number(paintLiters);

            totalArea = (h * w) * 4;
            areaForPainting = Math.ceil(totalArea - (totalArea * percentages));
            litersCount += paintLiters;

            if(litersCount > areaForPainting) {
                let diff = litersCount - areaForPainting;
                console.log(`All walls are painted and you have ${diff} l paint left!`);
                break;
            } else if(litersCount === areaForPainting) {
                console.log("All walls are painted! Great job, Pesho!");
                break;
            }

        } else {
            console.log(`${areaForPainting - litersCount} quadratic m left.`);
            break;
        }
    }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);