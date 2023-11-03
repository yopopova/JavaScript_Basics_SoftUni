function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let plumb1 = p1 * h;
    let plumb2 = p2 * h;

    let allPlumbLiters = plumb1 + plumb2;

    let plumb1Percentage = (plumb1 / allPlumbLiters) * 100;
    let plumb2Percentage = (plumb2 / allPlumbLiters) * 100;
    let plumbsPercentage = (allPlumbLiters / v) * 100;

    let diff = Math.abs(v - allPlumbLiters);

    if(allPlumbLiters > v) {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${plumbsPercentage.toFixed(2)}% full. Pipe 1: ${plumb1Percentage.toFixed(2)}%. Pipe 2: ${plumb2Percentage.toFixed(2)}%.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);