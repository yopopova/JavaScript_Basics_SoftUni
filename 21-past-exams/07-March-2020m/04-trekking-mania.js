function trekkingMania(input) {
    let index = 0;
    let allGroups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let kTwo = 0;
    let everest = 0;

    let allPeople = 0;

    for(let i = 0; i < allGroups; i++) { // If i = 1, then i <= groups !!!
        let group = Number(input[index]);
        index++;

        if(group <= 5) {
            musala += group;
        } else if(group >= 6 && group <= 12) {
            monblan += group;
        } else if(group >= 13 && group <= 25) {
            kilimandjaro += group;
        } else if(group >= 26 && group <= 40) {
            kTwo += group;
        } else if(group >= 41) {
            everest += group;
        }

        allPeople += group;
    }

    let groupMusala = (musala / allPeople) * 100;
    let groupMonblan = (monblan / allPeople) * 100;
    let groupKilimandjaro = (kilimandjaro / allPeople) * 100;
    let groupKTwo = (kTwo / allPeople) * 100;
    let groupEverest = (everest / allPeople) * 100;

    console.log(`${groupMusala.toFixed(2)}%`);
    console.log(`${groupMonblan.toFixed(2)}%`);
    console.log(`${groupKilimandjaro.toFixed(2)}%`);
    console.log(`${groupKTwo.toFixed(2)}%`);
    console.log(`${groupEverest.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);