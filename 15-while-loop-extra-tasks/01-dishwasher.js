function dishwasher(arr) {
    let index = 0;

    let dishSoapBottles = arr[0];
    let dishes1 = arr[1];
    let dishes2 = arr[2];
    let fleshPot = arr[3];
    let command = arr[index];
    
    while(command !== "End") {
        dishSoapBottles = Number(command);
        let dishSoapMl = Number(command);
        dishSoapMl = dishSoapBottles * 750;
        command = arr[index];
        index++;

        dishes1 = Number(command);
        let washedDishes1 = Number(command);
        washedDishes1 = dishes1 * 5;
        command = arr[index];
        index++;

        dishes2 = Number(command);
        let washedDishes2 = Number(command);
        washedDishes2 = dishes2 * 5;
        command = arr[index];
        index++;

        console.log(dishSoapMl);
        console.log(washedDishes1);
        console.log(washedDishes2);
        break;
    }
}

dishwasher(["2", "53", "65", "55", "End"]);