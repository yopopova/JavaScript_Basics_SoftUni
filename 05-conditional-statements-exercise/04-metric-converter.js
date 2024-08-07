function metricConverter(input){
    let num = Number(input[0]);
    let from = input[1];
    let to = input[2];

    let resultInMM = 0;
    let result = 0;

    if(from === "cm") {
        resultInMM = num * 10;
    } else if(from === "m") {
        resultInMM = num * 1000;
    } else {
        resultInMM = num;
    }

    if(to === "cm") {
        result = resultInMM / 10;
    } else if(to === "m") {
        result = resultInMM / 1000;
    } else {
        result = resultInMM;
    }

    console.log(result.toFixed(3));
}

metricConverter(["12","mm","m"]);
metricConverter(["150","m","cm"]);
metricConverter(["45","cm","mm"]);