function onTimeForTheExam(input) {
    let hourExamStart = Number(input[0]);
    let minExamStart = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = (hourExamStart * 60) + minExamStart;
    let timeArrive = (hourArrive * 60) + minArrive;

    if(timeArrive > timeExam) {
        console.log("Late");

        if(timeArrive - timeExam < 60) {
            console.log(`${timeArrive - timeExam} minutes after the start`);
        } else {
            let diff = timeArrive - timeExam;
            let h = Math.floor(diff / 60);
            let m = diff % 60;

            if(m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }

    } else if(timeArrive <= timeExam && timeExam - timeArrive <= 30) {
        console.log("On time");

        if(timeExam - timeArrive !== 0) {
            console.log(`${timeExam - timeArrive} minutes before the start`);
        }
    } else {
        console.log("Early");
         let diff = timeExam - timeArrive;
         let h = Math.floor(diff / 60);
         let m = diff % 60;

         if(diff < 60) {
             console.log(`${diff} minutes before the start`);
         } else if(m < 10) {
            console.log(`${h}:0${m} hours before the start`);
         } else {
            console.log(`${h}:${m} hours before the start`);
         }
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);