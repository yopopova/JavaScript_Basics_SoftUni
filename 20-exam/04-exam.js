function exam(input) {
    let index = 0;
    let students = Number(input[index]);
    index++;

    let poor = 0;
    let average = 0;
    let good = 0;
    let veryGood = 0;

    let totalResult = 0;

    for(let i = 0; i < students; i++) {
        let mark = Number(input[index]);
        index++;

        if((mark >= 2) && (mark < 3)) {
            poor++;
        } else if((mark >= 3) && (mark < 4)) {
            average++;
        } else if((mark >= 4) && (mark < 5)) {
            good++;
        } else if(mark >= 5.00) {
            veryGood++;
        }

        totalResult += mark;
    }

    veryGood = (veryGood / students) * 100;
    good = (good / students) * 100;
    average = (average / students) * 100;
    poor = (poor / students) * 100;

    let averageResult = totalResult / students;

    console.log(`Top students: ${veryGood.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${good.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${average.toFixed(2)}%`);
    console.log(`Fail: ${poor.toFixed(2)}%`);
    console.log(`Average: ${averageResult.toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);