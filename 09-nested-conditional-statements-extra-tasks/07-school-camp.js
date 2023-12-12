function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let priceForNight = 0;

    if(season === "Winter") {

        if((groupType === "boys") || (groupType === "girls")) {
            priceForNight = 9.60;
        } else if(groupType === "mixed") {
            priceForNight = 10;
        }

    } else if(season === "Spring") {

        if((groupType === "boys") || (groupType === "girls")) {
            priceForNight = 7.20;
        } else if(groupType === "mixed") {
            priceForNight = 9.50;
        }

    } else if(season === "Summer") {

        if((groupType === "boys") || (groupType === "girls")) {
            priceForNight = 15;
        } else if(groupType === "mixed") {
            priceForNight = 20;
        }
    }

    let totalPrice = (priceForNight * students) * nights;

    if((students >= 10) && (students < 20)) {
        totalPrice = totalPrice - (totalPrice * 0.05);
    } else if((students >= 20) && (students < 50)) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if(students >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.50);
    }

    if(season === "Winter") {

        if(groupType === "girls") {
            console.log(`Gymnastics ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "boys") {
            console.log(`Judo ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "mixed") {
            console.log(`Ski ${totalPrice.toFixed(2)} lv.`);
        }

    } else if(season === "Spring") {

        if(groupType === "girls") {
            console.log(`Athletics ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "boys") {
            console.log(`Tennis ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "mixed") {
            console.log(`Cycling ${totalPrice.toFixed(2)} lv.`);
        }

    } else if(season === "Summer") {

        if(groupType === "girls") {
            console.log(`Volleyball ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "boys") {
            console.log(`Football ${totalPrice.toFixed(2)} lv.`);
        } else if(groupType === "mixed") {
            console.log(`Swimming ${totalPrice.toFixed(2)} lv.`);
        }
    }

}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);