function trainingLab(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);

    let width = (w * 100) - 100;
    let height = h * 100;

    let desks = Math.floor(width / 70);
    let rows = Math.floor(height / 120);

    let allPlaces = (desks * rows) - 3;

    console.log(allPlaces);
}