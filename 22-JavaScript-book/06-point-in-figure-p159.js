function pointInFigure(arg1, arg2, arg3) {
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);

    // Split the large shape into two smaller rectangles.

    let x1 = 0;
    let y1 = 0;
    let x2 = h * 3;
    let y2 = h;
    // ^ The sides of the first rectangle.

    let x3 = h;
    let y3 = h;
    let x4 = h * 2;
    let y4 = h * 4;
    // ^ The sides of the second rectangle.

    let inRectangle1 = (x > x1 && x < x2) && (y > y1 && y < y2); // Inside rectangle 1.
    let outRectangle1 = (x < x1 || x > x2) || (y < y1 || y > y2); // Outside rectangle 1.

    let inRectangle2 = (x > x3 && x < x4) && (y > y3 && y < y4); // Inside rectangle 2.
    let outRectangle2 = (x < x3 || x > x4) || (y < y3 || y > y4); // Outside rectangle 2.

    let onBorder = x > x3 && x < x4 && y === y3; // When the point is on the border between the two rectangles a.k.a on their common side.

    if (inRectangle1 || inRectangle2 || onBorder) {
        console.log("inside");
    } else if (outRectangle1 && outRectangle2) {
        console.log("outside");
    } else {
        console.log("border");
    }
}

pointInFigure("2", "3", "10");
pointInFigure("2", "3", "1");
pointInFigure("2", "2", "2");
pointInFigure("2", "6", "0");
pointInFigure("2", "0", "6");
pointInFigure("15", "13", "55");
pointInFigure("15", "29", "37");
pointInFigure("15", "37", "18");