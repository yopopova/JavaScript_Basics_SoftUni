function journey(input) {
    let budget = Number(input[0]);
    let season  = input[1];

    let destination = "";
    let type = ""; // For the place where he will rest - hotel or camping.
    let money = 0;

    if(budget <= 100) {
        destination = "Bulgaria";

        switch(season) {
            case "summer":
                money = budget * 0.30;
                type = "Camp";
                break;
            case "winter":
                money = budget * 0.70;
                type = "Hotel";
                break;
        }
    } else if(budget <= 1000) {
        destination = "Balkans";

        switch(season) {
            case "summer":
                money = budget * 0.40;
                type = "Camp";
                break;
            case "winter":
                money = budget * 0.80;
                type = "Hotel";
                break;
        }
    } else {
        destination = "Europe";
        money = budget * 0.90;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${money.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);