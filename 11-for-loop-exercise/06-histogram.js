function histogram(input) {
    let index = 0;
    let n = Number(input[index]); // Here we take the value of the null element which is 3.
    index++; // Here index is incremented and takes the value of the element at the first position, which in this case is 1.

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 0; i < n; i++) {
        // ^ Since above we already removed the 1st element from the array => the 2nd element becomes first, so i = 0 to start from the first element, after regrouping the elements in the array.
        
        let currentNumber = Number(input[index]); // Here we take the value of index which was last from above in the first position which is 1.
        index++;
        
        if(currentNumber < 200) {
            p1Counter++;
        } else if(currentNumber >= 200 && currentNumber <= 399) {
            p2Counter++;
        } else if(currentNumber >= 400 && currentNumber <= 599) {
            p3Counter++;
        } else if(currentNumber >= 600 && currentNumber <= 799) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }

    let p1 = (p1Counter / n) * 100;
    let p2 = (p2Counter / n) * 100;
    let p3 = (p3Counter / n) * 100;
    let p4 = (p4Counter / n) * 100;
    let p5 = (p5Counter / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);