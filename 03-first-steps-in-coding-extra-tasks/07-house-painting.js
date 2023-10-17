function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontAndBack = (x * x) * 2;
    let door = 1.2 * 2;
    let frontAndBackWalls = frontAndBack - door;

    let sides = (x * y) * 2;
    let windows = (1.5 * 1.5) * 2;
    let sideWalls = sides - windows;

    let houseWalls = frontAndBackWalls + sideWalls;
    let greenColor = houseWalls / 3.4;

    let topSides = (x * y) * 2;
    let topFrontBack = (x * h / 2) * 2;
    let top = topSides + topFrontBack;

    let redColor = top / 4.3;

    console.log(greenColor.toFixed(2));
    console.log(redColor.toFixed(2));
}