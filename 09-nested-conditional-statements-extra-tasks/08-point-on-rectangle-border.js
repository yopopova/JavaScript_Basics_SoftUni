function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);

    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    // ^ The sides of the rectangle.

    let x = Number(input[4]); // Point values.
    let y = Number(input[5]); // Point values.

    if((x == x1 || x == x2) && (y >= y1) && (y <= y2)) { // We put () to ensure it will return true and then join it with the other 2 conditions.
        console.log("Border");
    } else if((y == y1 || y == y2) && (x >= x1) && (x <= x2)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointOnRectangleBorder(["2", "-3", "12", "3", "12", "1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "8", "1"]);